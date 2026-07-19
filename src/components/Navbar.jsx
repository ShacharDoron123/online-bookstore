import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/catalog">
        <button>Catalog</button>
      </NavLink>
       <NavLink to="/shopping-cart">
        <button>shopping cart</button>
      </NavLink>
    </nav>
  );
}

export default NavBar;
