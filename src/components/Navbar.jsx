import { NavLink } from "react-router-dom";
import UserCartSidebar from "./UserCartSidebar";

function NavBar() {
  return (
    <nav className="navBar">
      <div className="navBar-links">
        <NavLink to="/">
          <button>Home</button>
        </NavLink>
        <NavLink to="/catalog">
          <button>Catalog</button>
        </NavLink>
        <NavLink to="/shopping-cart">
          <button>Shopping Cart</button>
        </NavLink>
      </div>
      <UserCartSidebar />
    </nav>
  );
}

export default NavBar;