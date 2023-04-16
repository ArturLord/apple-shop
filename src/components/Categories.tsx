import React from "react";

import styles from '../scss/components/categories.module.scss';

type CategoriesProps = {
  valueCategory: number;
  onClickCategory: (i: number) => void;
};

const categories = [
  "Все",
  "Iphone 14",
  "Iphone 13",
  "Iphone 12",
  "Iphone 11",
  "Iphone SE",
];

const Categories: React.FC<CategoriesProps> = ({
  onClickCategory,
  valueCategory,
}) => {
  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((item, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={valueCategory === i ? styles.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
