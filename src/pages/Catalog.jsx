import Card from "../components/Card";
import { books } from "../data/books";
import { useState } from "react";
function Catalog() {
  const [query, setQuery] = useState("");

  let filterd = books.filter((book) =>
    book.name.toLowerCase().includes(query.toLowerCase()),
  );
  console.log("Catalog renders");
  return (
    <>
      <h2>Catalog:</h2>
      <p>here is all the books in our store</p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="card-container">
        {filterd.map((book) => (
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
