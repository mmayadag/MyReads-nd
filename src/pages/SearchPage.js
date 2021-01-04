import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BookShelf from '../components/BookShelf/BookShelf';

const SearchPage = ({
  books, isLoading, onSelectAction,
  error,
  clearSearch,
}) => {
  useEffect(() => {
    clearSearch();
  }, []);

  return (
    <>
      <h2>Search Page</h2>
      <br />
      {!isLoading && (
        <h3 style={{ padding: '0 1rem' }}>
          {error || `${books.length} result show`}
        </h3>
      )}
      {(!isLoading && books.length > 0)
        && <BookShelf books={books} title="results" onSelectAction={onSelectAction} />}
    </>
  );
};

export default SearchPage;

SearchPage.propTypes = {
  isLoading: PropTypes.bool,
  books: PropTypes.instanceOf(Array),
  onSelectAction: PropTypes.instanceOf(Function),
  clearSearch: PropTypes.instanceOf(Function),
  error: PropTypes.string,
};

SearchPage.defaultProps = {
  isLoading: null,
  books: [],
  onSelectAction: () => { },
  clearSearch: () => { },
  error: null,
};
