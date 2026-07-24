import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Card(book) {
  let linkName = book.name;
  linkName = linkName.replaceAll(" ", "-");
  const { items, setItems, addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <Link to={`/catalog/${linkName}`}>
        <div className="badge-and-img-con">
          <img className="img-container" src={book.img}></img>
          {book.badge && <div className="badge">{book.badge}</div>}
        </div>
        <h3>{book.name}</h3>
        <h3>{book.author}</h3>
        <p>{book.date}</p>
        <h3>
          {book.badge == "summer sale" ? ( //will be change to a more secure way when i will add server side
            <>
              <del>{book.price}</del>
              <ins>{book.price * 0.95}</ins>
            </>
          ) : (
            book.price
          )}
          $
        </h3>
      </Link>
      <button
        className="add-to-cart-btn"
        value={book.name}
        onClick={() => {
          addToCart(book)
        }
      }
      >
        add to cart
      </button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  badge: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
