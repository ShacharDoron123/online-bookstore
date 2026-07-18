import { Navigate, replace, useNavigate, useParams } from "react-router-dom";
import { books } from "../data/books";
import { useState } from "react";

function BookPage() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  let { name } = useParams();
  name = name.replaceAll("-", " ");
  let book = books.find((b) => b.name === name);

  function addBookToCart(name, qty) {
    let currentQty = Number(localStorage.getItem(name)) || 0;
    let total = currentQty + qty;
    localStorage.setItem(name, total.toString());
  }

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
              {book.badge == "summer sale" //will be change to a more secure way when i will add server side 
                ? "new Price: " + book.price * 0.95
                : "Price: " + book.price}
              $
            </h3>
            <label for="quantity">quantity:</label>
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
              onClick={() => addBookToCart(book.name, quantity)}
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
