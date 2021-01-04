import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import styles from './SearchBar.module.css';
import { ReactComponent as BackIcon } from '../../assets/icons/arrow-back.svg';

const SearchBar = ({ searchBooksData }) => (
  <>
    <div className={styles.nav}>
      <Link to="/">
        <BackIcon className={styles.backbutton} />
      </Link>
      <DebounceInput
        className={styles.searchInput}
        debounceTimeout={600}
        onChange={(e) => {
          searchBooksData(e.target.value);
        }}
        placeholder="Search by title or author"
      />
    </div>
  </>
);
SearchBar.propTypes = {
  searchBooksData: PropTypes.instanceOf(Function),
};

SearchBar.defaultProps = {
  searchBooksData: () => { },
};

export default SearchBar;
