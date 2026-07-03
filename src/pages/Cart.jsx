import { books } from "../data/books";

function Cart() {

    let totalPrice=0
        books.forEach((book) => {
        if(localStorage.getItem(book.name) != null)
            totalPrice += book.price*localStorage.getItem(book.name);
    });

    return (
    <>
      <h2>your shoping cart</h2>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>number</th>
          <th>price</th>
          <th>total price</th>
        </tr>
        {books.map((book, index ) => {
    if(localStorage.getItem(book.name) != null)
        return (
    <tr>
        <th>{index+1}</th>
        <th>  {book.name}  </th>
         <th>  {localStorage.getItem(book.name)}  </th>
          <th>  {book.price}  </th>
          <th>  {book.price*localStorage.getItem(book.name)}  </th>
          <button onClick={()=>{localStorage.removeItem(book.name);window.location.reload();}}>X</button>
          </tr>
    );
  })}
      </table>
      <h3>total Price: {totalPrice}</h3>
    </>
  );
}

export default Cart;
