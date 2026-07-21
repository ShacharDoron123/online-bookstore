import { books } from "../data/books";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {
  let [items, setItems] = useState(() =>
    books.filter((book) => localStorage.getItem(book.name) != null),
  );

  let totalPrice = 0;
  let discount = 0;

  items.forEach((item) => {
    const quantity = Number(localStorage.getItem(item.name)) || 0;
    const itemTotal = item.price * quantity;

    totalPrice += itemTotal;

    if (item.badge === "summer sale") {
      discount += itemTotal * 0.05;
    }
  });

  if (totalPrice === 0)
    return (
      <>
        <h2>your shopping cart is empty, you are welcome to fill it</h2>
        <Link to="/catalog">to catalog</Link>
      </>
    );

  return (
    <>
      <h2>your shopping cart</h2>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>number</th>
            <th>price</th>
            <th>total price</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map((book, index) => {
            const quantity = Number(localStorage.getItem(book.name)) || 0;
            return (
              <tr key={book.name}>
                <td>{index + 1}</td>
                <td> {book.name} </td>
                <td> {quantity} </td>
                <td className="cartT">
                  {book.badge === "summer sale" ? (
                    <>
                      <del>{book.price}</del>
                      <ins>{book.price * 0.95}</ins>
                    </>
                  ) : (
                    book.price
                  )}
                  $
                </td>
                <td> {book.price * quantity}$ </td>
                <td className="action-cell">
                  <button
                    className="delete-btn"
                    onClick={() => {
                      localStorage.removeItem(book.name);
                      setItems(items.filter((item) => item.name !== book.name));
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>total Price: {totalPrice}$</h3>
      <h3>discount: {discount.toFixed(2)}$</h3>
      <h3>to pay: {(totalPrice - discount).toFixed(2)}$</h3>
    </>
  );
}

export default Cart;
