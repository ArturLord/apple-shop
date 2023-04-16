import React from "react";
import { Link } from "react-router-dom";

import styles from '../scss/components/cart-empty.module.scss';

const CartEmpty: React.FC = () => (
    <div className={styles.cartEmpty}>
      <h2>
        Ваша корзина пуста
      </h2>
      <p>
        Чтобы сделать заказ, перейдите на главную страницу.
      </p>
      <img src="img/cart_empty.png" alt="Empty cart" />
      <Link to="/" className={styles.buttonBack}>
        <span>Вернуться назад</span>
      </Link>
    </div>
);

export default CartEmpty;
