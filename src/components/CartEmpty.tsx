import React from "react";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => (
    <div className="cart cart--empty">
      <h2>
        Ваша корзина пуста <span>😕</span>
      </h2>
      <p>
        Чтобы сделать заказ, перейдите на главную страницу.
      </p>
      <img src="img/empty-cart.png" alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
);

export default CartEmpty;
