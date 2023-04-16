import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Search from './Search/Search';
import { selectorCart } from '../redux/cart/selectors';

import styles from '../scss/components/header.module.scss';

const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectorCart);
  const isMounted = React.useRef(false);
  const locationSearch = useLocation();

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.headerLogo}>
            <img width="38" src="./img/logo_header.png" alt="appleLogo" />
            <div>
              <h1>I-Shop Point</h1>
              <p>Оригинальная техника Apple по низким ценам</p>
            </div>
          </div>
        </Link>
        {locationSearch.pathname !== '/cart' && <Search />}
        <div className={styles.headerCart}>
          <Link to="/cart" className={styles.buttonCart}>
            <span>{totalPrice} ₽</span>
            <div className={styles.buttonDelimiter}></div>
            <img src="img/cart.png" alt="cart" />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
