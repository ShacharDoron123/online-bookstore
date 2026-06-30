import Footer from "./Footer";
import NavBar from "./Navbar";

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
