import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function UserCartSidebar() {
  const { items = [] } = useContext(CartContext);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="sidebar">
      <Link to="/shopping-cart" className="cart-link">
        <span className="cart-icon">🛒</span>
        {totalCount > 0 ? (
          <span className="cart-badge">{totalCount}</span>
        ) : (
          <span className="cart-empty-text">Empty</span>
        )}
      </Link>
    </aside>
  );
}

export default UserCartSidebar;
