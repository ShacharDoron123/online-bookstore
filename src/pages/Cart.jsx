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
        <h2>your shoping cart is empty, you are wellcom to fill it</h2>
        <Link to="/catalog">to catalog</Link>
      </>
    );
    

  return (
    <>
      <h2>your shoping cart</h2>
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>number</th>
          <th>price</th>
          <th>total price</th>
        </tr>
        </thead>
        <tbody>
        {items.map((book, index) => {
            return (
              <tr key={book.name}>
                <th>{index + 1}</th>
                <th> {book.name} </th>
                <th> {localStorage.getItem(book.name)} </th>
                <th> {book.price} </th>
                <th> {book.price * localStorage.getItem(book.name)} </th>
                <th>
                <button
                  onClick={() => {
                    localStorage.removeItem(book.name);
                    setItems(items.filter((item)=> item.name !== book.name))   
                  }}
                >
                  X
                </button>
                </th>
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
