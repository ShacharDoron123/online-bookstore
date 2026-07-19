import { HashRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import BookPage from "./pages/BookPage";
import Cart from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:name" element={<BookPage />} />
          <Route path="shopping-cart" element={<Cart />} />
          <Route path="*" element={<h2>404 | page not found</h2>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;