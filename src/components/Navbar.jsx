import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/">
        <bouttn>Home</bouttn>
      </Link>
      <Link to="/catalog">
        <bouttn>Catalog</bouttn>
      </Link>
    </>
  );
}

export default NavBar;
