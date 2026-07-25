import { Navigate, replace, useNavigate, useParams } from "react-router-dom";
import { books } from "../data/books";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";

function BookPage() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
   const { items, setItems, addToCart } = useContext(CartContext);
  let { name } = useParams();
  name = name.replaceAll("-", " ");
  let book = books.find((b) => b.name === name);


  if (book == null) {
    return <Navigate to="/page-not-found" />;
  }

  return (
    <>
      <button className="back-btn" onClick={() => navigate(-1)}>
        back
      </button>
      <h2>{name}</h2>
      <h2>by {book.author}</h2>
      <h3>{book.date}</h3>
      <div className="info-bp">
        <div className="img-bp">
          <img src={book.img} alt={book.name + " book cover"}></img>
          {book.badge && <div className="badge">{book.badge}</div>}
        </div>
        <div>
          <p>{book.Summary}</p>
          <h3>Technical Details:</h3>
          <ul>
            <li>Pages: {book.pages}</li>
            <li>Cover: {book.coverType}</li>
          </ul>
          <div className="buy">
            <h3>
              {book.badge == "summer sale" ? ( //will be change to a more secure way when i will add server side
                <>
                  <del>{book.price}</del>
                  <ins>{book.price * 0.95}</ins>
                </>
              ) : (
                "Price: " + book.price
              )}
              $
            </h3>
            <label htmlFor="quantity">quantity:</label>
            <select
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(book,quantity)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPage;
