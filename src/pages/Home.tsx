/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import AppleBlock from "../components/AppleCards/AppleBlock";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import { useAppDispatch } from "../redux/store";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { selectorFilter } from "../redux/filter/selectors";
import { fetchApples } from "../components/services/services";
import { selectorApples } from "../redux/apple/selectors";

import styles from "../scss/app.module.scss";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectorApples);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectorFilter);
  const sortType = sort.sortProp;

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getApples = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchApples({
        category,
        sortBy,
        order,
        search,
        currentPage: String(currentPage),
      })
    );

    // window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getApples();
  }, [categoryId, sortType, searchValue, currentPage]);

  const apples = items.map((obj: any) => <AppleBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => <Loader key={index} />);

  return (
    <div>
      <div className={styles.contentTop}>
        <Categories
          valueCategory={categoryId}
          onClickCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className={styles.contentTitle}>Купить Iphone</h2>
      {status === "error" ? (
        <div className={styles.contentErr}>
          <h2>Ошибка</h2>
          <p>Попробуйте позже</p>
        </div>
      ) : (
        <div className={styles.contentItems}>
          {status === "loading" ? skeletons : apples}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
export default Home;
