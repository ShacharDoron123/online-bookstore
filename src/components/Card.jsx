import { useContext } from "react";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

function Card(book) {
  const { addToCart } = useContext(CartContext);

  const getImageUrl = (path) => {
    if (!path) return "";
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  const bookUrlPath = book.name ? book.name.replaceAll(" ", "-") : "";

  return (
    <div className="card">
      {book.badge && <span className="card-badge">{book.badge}</span>}

      <Link to={`/catalog/${bookUrlPath}`}>
        <img
          src={getImageUrl(book.img)}
          alt={book.name}
          className="card-image"
        />
      </Link>

      <div className="card-details">
        <h3 className="card-title">
          <Link to={`/catalog/${bookUrlPath}`}/>
        </h3>
        <p className="card-author">{book.author}</p>
        <p className="card-year">{book.year}</p>

        <div className="card-price">
          {book.oldPrice && (
            <span className="old-price">${book.oldPrice} </span>
          )}
          <span className="current-price">{book.price}$</span>
        </div>
      </div>

      <button 
        className="add-to-cart-btn" 
        onClick={() => addToCart(book)}
      >
        add to cart
      </button>
    </div>
  );
}

export default Card;