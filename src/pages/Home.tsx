import React from "react";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/AppleCards/PizzaBlock";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import { useAppDispatch } from "../redux/store";
import { setCategoryId, setCurrentPage } from "../redux/filter/slice";
import { selectorFilter } from "../redux/filter/selectors";
import { fetchApples } from "../components/services/services";
import { selectorApples } from "../redux/apple/selectors";

const Home: React.FC = () => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const isSearch = React.useRef(false);
  // const isMounted = React.useRef(false);
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

    window.scrollTo(0, 0);
  };

  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId: categoryId > 0 ? categoryId : null,
  //       sortProp: sortType,
  //       currentPage,
  //     };
  //     const queryString = qs.stringify(params, { skipNulls: true });

  //     navigate(`?${queryString}`);
  //   }
  //   if (!window.location.search) {
  //     dispatch(fetchApples({} as SearchAppleParams));
  //   }
  // }, [categoryId, sortType, currentPage]);

  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SearchAppleParams;
  //     const sort = sortList.find((obj) => obj.sortProp === params.sortBy);

  //     dispatch(setFilters({
  //       searchValue: params.search,
  //       categoryId: +params.category,
  //       currentPage: +params.currentPage,
  //       sort: sort || sortList[0],
  //     }));
  //     isSearch.current = true;
  //   }
  // }, []);

  React.useEffect(() => {
    getApples();
  }, [categoryId, sortType, searchValue, currentPage]);

  const apples = items.map((obj: any) => (
      <PizzaBlock {...obj} />
  ));
  const skeletons = [...new Array(6)].map((_, index) => <Loader key={index} />);

  return (
    <div>
      <div className="container"></div>
      <div className="content__top">
        <Categories
          valueCategory={categoryId}
          onClickCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div className="content__error">
          <h2>Ошибка</h2>
          <p>Попробуйте позже</p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : apples}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};
export default Home;
