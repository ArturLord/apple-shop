import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <Link to="/shippingandpayment">
          <p>Доставка и оплата</p>
        </Link>
        <Link to="/warranty">
          <p>Гарантия</p>
        </Link>
        <Link to="/discount">
          <p>Нашли дешевле? Снизим цену!</p>
        </Link>
        <Link to="/contacts">
          <p>Контакты</p>
        </Link>
        <Link to="/privacypolicy">
          <p>Политика конфиденциальности</p>
        </Link>
      </div>
      <span>{new Date().getFullYear()} | Все права защищены</span>
    </div>
  );
};

export default Footer;
