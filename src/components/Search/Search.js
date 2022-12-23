import React from "react";
import { SearchContext } from "../../App";

import styles from "./Search.module.scss";

const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <img className={styles.search} src="img/search.svg" alt="search" />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск"
      />
      {searchValue ? (
        <img
          onClick={() => setSearchValue("")}
          className={styles.closeSearch}
          src="img/close-search.svg"
          alt="close"
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Search;
