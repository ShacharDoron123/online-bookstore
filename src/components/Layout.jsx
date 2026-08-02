import Footer from "./Footer";
import NavBar from "./Navbar";
import UserCartSidebar from "./UserCartSidebar";
import { CartContext, CartProvider } from "../CartContext";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="layout-container">
      <CartProvider>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default Layout;
