import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

import "./scss/app.scss";

//оптимизация
const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart"*/ "./pages/Cart")
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound"*/ "./pages/NotFound")
);
const PageApple = React.lazy(
  () => import(/* webpackChunkName: "PageApple"*/ "./pages/PageApple")
);

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <Suspense fallback={<div>Идет загрузка корзины</div>}>
                  <NotFound />
                </Suspense>
              }
            />
            <Route
              path="/apples/:id"
              element={
                <Suspense fallback={<div>Идет загрузка</div>}>
                  <PageApple />
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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
