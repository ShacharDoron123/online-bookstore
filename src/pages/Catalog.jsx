import Card from "../components/Card";
import NavBar from "../components/Navbar";
import { books, categories } from "../data/books";
import { useState } from "react";
function Catalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  let filterd;

  if (category === "") {
    filterd = books.filter(
      (book) =>
        book.name.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()),
    );
  } else {
    filterd = books.filter(
      (book) =>
        book.category === category &&
        (book.name.toLowerCase().includes(query.toLowerCase()) ||
          book.author.toLowerCase().includes(query.toLowerCase())),
    );
  }
  return (
    <>
      <div className="catalog-header">
        <h2>Catalog</h2>
        <p>Explore our complete collection of books</p>
      </div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by title or author..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <nav className="category-nav">
        <button
          className={`category-pill ${category === "" ? "active" : ""}`}
          onClick={() => setCategory("")}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-pill ${category === cat ? "active" : ""}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

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
