import React from 'react';
import PropTypes from 'prop-types';
import BookShelves from '../components/BookShelf/BookShelves';
import AddButton from '../components/AddButton/AddButton';

const MainPage = ({ books, isLoading, onSelectAction }) => (
  <>
    <BookShelves books={books} isLoading={isLoading} onSelectAction={onSelectAction} />
    <AddButton />
  </>
);

export default MainPage;

MainPage.propTypes = {
  isLoading: PropTypes.bool,
  books: PropTypes.instanceOf(Array),
  onSelectAction: PropTypes.instanceOf(Function),
};

MainPage.defaultProps = {
  isLoading: null,
  books: [],
  onSelectAction: () => { },
};
