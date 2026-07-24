import { useContext } from "react"; 
import { CartContext } from "../CartContext";

function UserCartSidebar() {
  const { items } = useContext(CartContext);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="sidebar">
      <button>({totalCount})</button>
    </aside>
  );
}

export default UserCartSidebar