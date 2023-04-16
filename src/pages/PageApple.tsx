/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/cart/slice";
// import { selectorCartItemById } from "../redux/cart/selectors";
import { CartItem } from "../redux/cart/types";

import styles from '../scss/components/page-apple.module.scss';
import { isDisabled } from "@testing-library/user-event/dist/utils";


const typeNames = [
  "Золотистый",
  "Темно-фиолетовый",
  "Серебристый",
  "Черный космос",
  "Белый",
  "Зеленый",
  "Графитовый",
  "Небесно-голубой",
  "Фиолетовый",
  "(PRODUCT) RED",
  "Сияющая звезда",
  "Розовый",
  "Серый космос"
];

type AppleBlockProps = {
  title: string;
  colors: string;
  price: number;
  imageUrl: string;
  id: string;
  sizes: number[];
  types: number[];
};

const PageApple: React.FC<AppleBlockProps> = ({
  title,
  colors,
  price,
  imageUrl,
  id,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();
  // const cartItem = useSelector(selectorCartItemById(id));
  const [activeType, setActiveType] = React.useState(-1);
  const [activeSize, setActiveSize] = React.useState(-1);
  // const addedCount = cartItem ? cartItem.count : 0;
  const { userId } = useParams();
  const [apple, setApple] = React.useState();
  console.log(apple);

  React.useEffect(() => {
    async function fetchApple() {
      try {
        const { data } = await axios.get(
          `https://63a305fb471b38b206038c10.mockapi.io/items/${userId}`
        );
        setApple(data);
      } catch (error) {
        alert("Ошибка");
      }
    }

    fetchApple();
  }, []);

  const onClickAdd = () => {
    const item: CartItem = {
      title,
      price,
      imageUrl,
      id,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  if (!apple) {
    return <>'Загрузка'</>;
  }

  return (
    <div className={styles.wrapperApple}>
      <h1>{title} {sizes[0]} Gb {colors} </h1>
      <div className={styles.cardApple}>
        <img src={imageUrl} alt="apple" />
        <div className={styles.itemOptions}>
          <h2>{title} {sizes[0]} Gb {colors} </h2>
          <div className={styles.itemH5}>Цвет</div>
          <div className={styles.productColor}>
            <ul>
              {types.map((type) => (
                <li
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={activeType === type ? styles.active : ""}
                >
                  {typeNames[type]}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.itemH5}>Объем памяти</div>
          <div className={styles.productMemory}>
            <ul>
              {sizes.map((size, i) => (
                <li
                  key={size}
                  onClick={() => setActiveSize(i)}
                  className={activeSize === i ? styles.active : ""}
                >
                  {typeNames[size]}
                  {size} Gb
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.productPrice}>
            <div className={styles.productPrices}>
              <h4>{price} руб</h4>
              <p>Нашли дешевле? Снизим Цену!</p>
            </div>
            <Link to="/cart">
              <button
                onClick={onClickAdd}
                className={styles.productButton}
              >
                <span>Купить</span>
                {/* {addedCount > 0 ? <i>{addedCount}</i> : ""} */}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageApple;
