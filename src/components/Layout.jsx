import Footer from "./Footer";
import NavBar from "./Navbar";
import UserCartSidebar from "./UserCartSidebar";
import { CartContext, CartProvider } from "../CartContext";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <body>
      <CartProvider>
        <NavBar />
        <UserCartSidebar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </body>
  );
}

export default Layout;
