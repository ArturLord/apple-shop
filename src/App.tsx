import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Slider from './components/Slider/Slider';
import Home from './pages/Home';
import ShippingPayment from './pages/FooterPages/ShippingPayment';
import { selectorApples } from './redux/apple/selectors';

import styles from './scss/app.module.scss';

import Warranty from './pages/FooterPages/Warranty';
import Discount from './pages/FooterPages/Discount';
import PrivacyPolicy from './pages/FooterPages/PrivacyPolicy';
import Contacts from './pages/FooterPages/Contacts';

//оптимизация
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/ './pages/Cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/ './pages/NotFound'));
const PageApple = React.lazy(() => import(/* webpackChunkName: "PageApple"*/ './pages/PageApple'));

function App() {
  const { items } = useSelector(selectorApples);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Slider />} />
      </Routes>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/apples/:userId"
              element={
                <Suspense fallback={<div>Идет загрузка</div>}>
                  {items.map((obj) => (
                    <PageApple {...obj} key={obj.id} />
                  ))}
                </Suspense>
              }
            />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Идет загрузка корзины</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/shippingandpayment" element={<ShippingPayment />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/discount" element={<Discount />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
