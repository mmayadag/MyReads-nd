import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { getAll, update, search } from '../../api/BooksAPI';

import MainPage from '../../pages/MainPage';
import SearchPage from '../../pages/SearchPage';
import SearchBar from '../SearchBar/SearchBar';

const navLinks = [
  { title: 'MyReads', to: '/', component: <MainPage /> },
  { title: 'Search', to: '/search', component: <SearchPage /> },
];
const Navigation = () => (
  <nav>
    {
      navLinks.map((r) => <Link key={r.to} to={r.to}>{r.title}</Link>)
    }
  </nav>
);

const App = () => {
  const [books, setBooks] = useState([]);
  const [isloading, setLoading] = useState(null);
  const [searchBooks, setSearchBooks] = useState([]);
  const [indexes, setIndexes] = useState({});
  const [error, setError] = useState(null);

  const createIndexes = (items) => {
    const newIndexes = {};
    items.forEach((b) => { newIndexes[b.id] = b.shelf; });
    setIndexes(newIndexes);
    // Reindex search books
    if (searchBooks.length > 0 && indexes.length > 0) {
      const reIndexedData = searchBooks.map((b) => {
        let extra = {};
        if (indexes && indexes[b.id] !== undefined) {
          extra = { shelf: indexes[b.id] };
        }
        return { ...b, ...extra };
      });
      setSearchBooks(reIndexedData);
    }
  };

  const fetchBooksData = async (withLoading = true) => {
    if (withLoading) setLoading(true);
    const data = await getAll();
    setBooks(data);
    createIndexes(data);
    setLoading(false);
  };

  const onSelectAction = async (book, value) => {
    await update(book, value);
    await fetchBooksData(false);
  };

  const clearSearch = () => {
    if (error || searchBooks.length > 0) {
      setError('');
      setSearchBooks([]);
    }
  };

  const searchBooksData = async (value) => {
    if (value.length > 0) {
      setLoading(true);
      let data = await search(value);
      if (data.error !== undefined) {
        setError(data.error);
        setSearchBooks([]);
      } else {
        setError(null);
        if (indexes) {
          data = data.map((b) => {
            let extra = {};
            // check indexes & match with response data
            if (indexes && indexes[b.id] !== undefined) {
              extra = { shelf: indexes[b.id] };
            }
            return { ...b, ...extra };
          });
        }
        setSearchBooks(data);
      }
      setLoading(false);
      // {"books":{"error":"empty query","items":[]}}
    } else {
      clearSearch();
    }
  };

  useEffect(() => {
    fetchBooksData();
  }, []);

  return (
    <Router>
      <>
        <header>
          <Switch>
            <Route path="/search">
              <SearchBar searchBooksData={searchBooksData} />
            </Route>
            <Route exact path="/">
              <Navigation />
            </Route>
          </Switch>
        </header>
        <main>
          <Switch>
            <Route path="/search">
              <SearchPage
                books={searchBooks}
                isLoading={isloading}
                onSelectAction={onSelectAction}
                error={error}
                clearSearch={clearSearch}
              />
            </Route>
            <Route exact path="/">
              <MainPage
                books={books}
                isLoading={isloading}
                onSelectAction={onSelectAction}
                clearSearch={clearSearch}
              />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  );
};

export default App;
