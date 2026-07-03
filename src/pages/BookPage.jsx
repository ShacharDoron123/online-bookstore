import { Navigate, replace, useNavigate, useParams } from "react-router-dom";
import { books } from "../data/books";

function BookPage() {
  let { name } = useParams();
  name = name.replaceAll("-", " ");
  let book = books.find((b) => b.name === name);

  function addBookToCart(name){
    let num = Number(localStorage.getItem(name))+1;
    localStorage.setItem(name,num.toString())
  }

  if (book == null) {
    return <Navigate to="/page-not-found" />;
  }

  return (
    <>
      <h2>{name}</h2>
      <h2>by {book.author}</h2>
      <h3>{book.date}</h3>
      <img src={book.img} alt={book.name + " book cover"}></img>
      <button onClick={() => addBookToCart(book.name)}>add to cart</button>
    </>
  );
}

export default BookPage;
