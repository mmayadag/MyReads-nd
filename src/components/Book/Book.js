import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css'; // Import css modules stylesheet as styles
import SelectShelf from './SelectShelf/SelectShelf';

// eslint-disable-next-line react/prop-types
const BookAuthors = ({ authors }) => (
  <>
    <div className={styles.authors}>
      {authors?.map((a) => <div key={a}>{a}</div>)}
    </div>
  </>
);

/// styles example
const bookStyles = {
  thumbnail: {
    width: '100%',
    height: '210px',
    backgroundRepeat: ' no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    position: 'relative',
  },
};
// eslint-disable-next-line react/prop-types
const Book = ({ item }) => {
  const { title, authors, imageLinks } = item;
  return (
    <article className={styles.article}>
      <div>
        <div style={{
          backgroundImage: `url(${imageLinks?.thumbnail})`,
          ...bookStyles.thumbnail,
        }}
        >
          <SelectShelf book={item} />
        </div>
        <p className={styles.title}>{title}</p>
        <BookAuthors authors={authors} />
      </div>
    </article>
  );
};

BookAuthors.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.string),
};

BookAuthors.defaultProps = {
  authors: [],
};

Book.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string,
    }),
  }),
};

Book.defaultProps = {
  item: {
    title: '',
    authors: [],
    imageLinks: {},
  },
};

export default Book;
