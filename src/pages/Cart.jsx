import { books } from "../data/books";
import { Link } from "react-router-dom";
import { useState } from "react";

function Cart() {

  let [items,setItems] = useState(()=>
    books.filter((book) => localStorage.getItem(book.name) != null)
  );
  
  let totalPrice = 0;
  items.forEach(item => {
    totalPrice += item.price*localStorage.getItem(item.name);
  });

  if (totalPrice === 0)
    return (
      <>
        <h2>your shoping cart is empty, you are welcome to fill it</h2>
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
          <th/>
        </tr>
        </thead>
        <tbody>
        {items.map((book, index) => {
            return (
              <tr key={book.name}>
                <td>{index + 1}</td>
                <td> {book.name} </td>
                <td> {localStorage.getItem(book.name)} </td>
                <td> {book.price} </td>
                <td> {book.price * localStorage.getItem(book.name)} </td>
                <td className="action-cell">
                <button className="delete-btn"
                  onClick={() => {
                    localStorage.removeItem(book.name);
                    setItems(items.filter((item)=> item.name !== book.name))   
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
      <h3>total Price: {totalPrice}</h3>
    </>
  );
}

export default Cart;
