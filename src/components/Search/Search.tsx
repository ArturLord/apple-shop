import React from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/filter/slice";
import { useDispatch } from "react-redux";

import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img className={styles.search} src="img/search.svg" alt="search" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск"
      />
      {value ? (
        <img
          onClick={onClickClear}
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
