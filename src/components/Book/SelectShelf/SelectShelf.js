import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-drop-down.svg';
import styles from './SelectShelf.module.css';
import SHELF_STATUS from '../../../enum/index';

const shelfs = Object.keys(SHELF_STATUS);
const SelectShelf = ({ book, onSelectAction }) => {
  const [value, setValue] = useState(book.shelf || 'none');
  return (
    <span className={styles.floatingButton}>
      <ArrowIcon className={styles.arrowIcon} />
      <select
        value={value}
        onChange={async (e) => {
          setValue(e.target.value);
          await onSelectAction(book, e.target.value);
        }}
        onBlur={() => {
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
};

SelectShelf.propTypes = {
  book: PropTypes.shape({
    shelf: PropTypes.string,
  }),
  onSelectAction: PropTypes.instanceOf(Function).isRequired,
};

SelectShelf.defaultProps = {
  book: {
    shelf: 'none',
  },
  // onSelectAction: () => { },
};
export default SelectShelf;
