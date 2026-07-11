import Footer from "./Footer";
import NavBar from "./Navbar";

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <body>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </body>
  );
}

export default Layout;
