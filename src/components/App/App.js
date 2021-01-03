import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import SearchPage from '../../pages/SearchPage';

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
const App = () => (
  <Router>
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <MainPage />
          </Route>
        </Switch>
      </main>
    </>
  </Router>
);

export default App;
