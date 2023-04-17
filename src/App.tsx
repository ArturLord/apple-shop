import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header';
import Slider from './components/Slider/Slider';
import Home from './pages/Home';
import ShippingPayment from './pages/FooterPages/ShippingPayment';

import styles from './scss/app.module.scss';

import Warranty from './pages/FooterPages/Warranty';
import Discount from './pages/FooterPages/Discount';
import PrivacyPolicy from './pages/FooterPages/PrivacyPolicy';
import Contacts from './pages/FooterPages/Contacts';
import Loading from './components/Loading/Loading';

//оптимизация
const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/ './pages/Cart'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/ './pages/NotFound'));
const PageApple = React.lazy(() => import(/* webpackChunkName: "PageApple"*/ './pages/PageApple'));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Slider />} />
      </Routes>
      <Suspense fallback={<Loading />}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/apples/:idx"
                element={
                  <Suspense fallback={<Loading />}>
                    <PageApple />
                  </Suspense>
                }
              />
              <Route
                path="/cart"
                element={
                  <Suspense fallback={<Loading />}>
                    <Cart />
                  </Suspense>
                }
              />

              <Route path="/shippingandpayment" element={<ShippingPayment />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="/discount" element={<Discount />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/contacts" element={<Contacts />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
