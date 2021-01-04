import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import SHELF_STATUS from '../../enum/index';

const shelfs = Object.keys(SHELF_STATUS);

const BookShelfs = ({ books, isLoading, onSelectAction }) => (
  <>
    {shelfs.map((s) => (
      <BookShelf
        key={s}
        books={books.filter((b) => b.shelf === s)}
        title={SHELF_STATUS[s]}
        isLoading={isLoading}
        onSelectAction={onSelectAction}
      />
    ))}
  </>
);

BookShelfs.propTypes = {
  isLoading: PropTypes.bool,
  onSelectAction: PropTypes.instanceOf(Function).isRequired,
  books: PropTypes.instanceOf(Array),
};

BookShelfs.defaultProps = {
  isLoading: null,
  books: [],
};

export default BookShelfs;
