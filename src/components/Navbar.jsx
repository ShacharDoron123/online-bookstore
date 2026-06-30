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
    </>
  );
}

export default NavBar;
