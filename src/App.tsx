import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import PageApple from "./pages/PageApple";
import NotFound from "./pages/NotFound";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/apples/:id" element={<PageApple />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
