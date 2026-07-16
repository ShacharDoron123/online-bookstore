import Card from "../components/Card";
import { books } from "../data/books";
function Catalog() {
  return (
    <>
      <h2>Catalog:</h2>
      <p>here is all the books in our store</p>
      <div className="card-container">
        {books.map((book) => (
          <Card
            key={book.name}
            name={book.name}
            date={book.date}
            img={book.img}
            badge={book.badge}
            price={book.price}
            author={book.author}
          />
        ))}
      </div>
    </>
  );
}

export default Catalog;
