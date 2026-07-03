import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/catalog">
        <button>Catalog</button>
      </Link>
       <Link to="/shopping-cart">
        <button>shopping cart</button>
      </Link>
    </>
  );
}

export default NavBar;
