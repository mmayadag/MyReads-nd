import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

const BookList = ({ books, onSelectAction }) => (
  <>
    {
      books.length > 0
        ? books.map((item) => <Book item={item} key={item.id} onSelectAction={onSelectAction} />)
        : <h1>Empty</h1>
    }
  </>
);
BookList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  onSelectAction: PropTypes.instanceOf(Function).isRequired,
};

export default BookList;
