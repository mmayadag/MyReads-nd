import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-drop-down.svg';
import styles from './SelectShelf.module.css';
import SHELF_STATUS from '../../../enum/index';
import { update } from '../../../api/BooksAPI';

const shelfs = Object.keys(SHELF_STATUS);
const SelectShelf = ({ book }) => (
  <span className={styles.floatingButton}>
    <ArrowIcon className={styles.arrowIcon} />
    <select
      value={book.shelf || 'none'}
      onBlur={async (e) => {
        await update(book, e.target.value);
      }}
    >
      <option value="" disabled>Move to...</option>
      {shelfs.map((s) => (
        <option value={s} key={s}>
          {SHELF_STATUS[s]}
        </option>
      ))}
      <option value="none">none</option>
    </select>
  </span>
);

SelectShelf.propTypes = {
  book: PropTypes.shape({
    shelf: PropTypes.string,
  }),
};

SelectShelf.defaultProps = {
  book: {
    shelf: '',
  },
};
export default SelectShelf;
