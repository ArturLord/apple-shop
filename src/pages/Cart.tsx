import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { clearItems } from '../redux/cart/slice';
import CartItem from '../components/CartItem';
import CartEmpty from '../components/CartEmpty';
import { selectorCart } from '../redux/cart/selectors';

import styles from '../scss/components/cart.module.scss';
import Loading from '../components/Loading/Loading';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectorCart);
  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems());
    }
  };

  if (!items) {
    return <Loading />;
  }

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        <div className={styles.cartTop}>
          <h2 className={styles.contentTitle}>
            <img src="img/shop-cart.png" alt="cart" />
            Корзина
          </h2>
          <div className={styles.cartClear}>
            <img src="img/trash.png" alt="trash" />
            <span onClick={onClickClear}>Очистить корзину</span>
          </div>
        </div>
        <div className={styles.cartItems}>
          {items.map((item: any) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className={styles.cartBottom}>
          <div className={styles.cartBottomDetails}>
            <span>
              Всего: <b>{totalCount} шт.</b>
            </span>
            <span>
              Сумма заказа: <b>{totalPrice} ₽</b>
            </span>
          </div>
          <div className={styles.bottomBtn}>
            <Link to="/" className={styles.backBtn}>
              <img src="img/arrow.png" alt="arrow" />
              <span>Вернуться назад</span>
            </Link>
            <div className={styles.payBtn}>
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
