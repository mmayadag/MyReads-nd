import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookShelf.module.css'; // Import css modules stylesheet as styles
import Loading from '../Loading/Loading';
import BookList from './BookList';

const BookShelf = ({
  books, title, isLoading, onSelectAction,
}) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.booklist}>
      {isLoading === true ? <Loading />
        : <BookList books={books} onSelectAction={onSelectAction} />}
    </div>
  </section>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  books: PropTypes.instanceOf(Array),
  onSelectAction: PropTypes.instanceOf(Function).isRequired,
};

BookShelf.defaultProps = {
  books: [],
  isLoading: null,
};

export default BookShelf;
