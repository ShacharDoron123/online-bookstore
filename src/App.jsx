import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/catalog">Catalog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
