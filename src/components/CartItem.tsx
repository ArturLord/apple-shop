import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/cart/slice";
import { CartItem } from "../redux/cart/types";

import styles from "../scss/components/cart.module.scss";

type CartItemProps = {
  title: string;
  price: number;
  type: number;
  size: number;
  imageUrl: string;
  id: string;
  count: number;
};
const CartItemBlock: React.FC<CartItemProps> = ({
  title,
  price,
  type,
  size,
  imageUrl,
  id,
  count,
}) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItem)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.cartItem}>
<div className={styles.cartItemLeft}>
<div className={styles.cartItemImg}>
        <img src={imageUrl} alt="apple" />
      </div>
      <div className={styles.cartItemInfo}>
        <h3>
          {title} {size} Gb {type}
        </h3>
      </div>
</div>
     <div className={styles.cartItemRight}>
     <div className={styles.cartItemCount}>
        <button disabled={count === 1} onClick={onClickMinus}>
          <img src="img/minus.png" alt="minus" />
        </button>
        <b>{count}</b>
        <button onClick={onClickPlus}>
          <img src="img/plus.png" alt="plus" />
        </button>
      </div>
      <div className={styles.cartItemPrice}>
        <b>{price * count} ₽</b>
      </div>
      <div className={styles.cartItemRemove}>
        <button onClick={onClickRemove}>
          <img src="img/close-cart.png" alt="close" />
        </button>
      </div>
     </div>
    </div>
  );
};

export default CartItemBlock;
