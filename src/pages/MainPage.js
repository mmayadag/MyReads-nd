import React, { useState, useEffect } from 'react';
import { getAll } from '../api/BooksAPI';

import BookShelfs from '../components/BookShelf/BookShelfs';
import AddButton from '../components/AddButton/AddButton';

const MainPage = () => {
  const [books, setBooks] = useState([]);
  const [isloading, setLoading] = useState(null);
  const fetchBooksData = async () => {
    setLoading(true);
    const data = await getAll();
    setBooks(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchBooksData();
  }, []);

  return (
    <>
      <BookShelfs books={books} isLoading={isloading} />
      <AddButton />
    </>
  );
};

export default MainPage;
