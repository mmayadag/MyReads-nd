import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import styles from './BookShelf.module.css'; // Import css modules stylesheet as styles

const BookShelf = ({ books, title }) => (
  <>
    { books.length > 0
      ? (
        <section className={styles.section}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.booklist}>
            {books.map((item) => <Book item={item} key={item.id} />)}
          </div>
        </section>
      )
      : <h1>Empty</h1>}
  </>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array,
};

BookShelf.defaultProps = {
  books: [],
};

export default BookShelf;
