import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import Loading from '../Loading/Loading';
import SHELF_STATUS from '../../enum/index';

const shelfs = Object.keys(SHELF_STATUS);

const BookShelfs = ({ books, isLoading }) => {
  const indexes = {};
  // TODO: indexes show whit indexes
  books.forEach((b) => { indexes[b.id] = b.shelf; });
  return (
    <>
      {isLoading
        ? <Loading />
        : shelfs.map((s) => (
          <BookShelf
            key={s}
            books={books.filter((b) => b.shelf === s)}
            title={SHELF_STATUS[s]}
          />
        ))}
    </>
  );
};

BookShelfs.propTypes = {
  isLoading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array,
};

BookShelfs.defaultProps = {
  isLoading: null,
  books: [],
};

export default BookShelfs;
