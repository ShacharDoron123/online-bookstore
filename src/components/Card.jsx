import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(book) {
  let linkName = book.name;
  linkName = linkName.replaceAll(" ", "-");

  return (
    <div className="card">
      <Link to={`/catalog/${linkName}`}>
        <div className="badge-and-img-con">
          <img className="img-container" src={book.img}></img>
          {book.badge && <div className="badge">{book.badge}</div>}
        </div>
        <h3>{book.name}</h3>
        <h3>{book.author}</h3>
        <p>{book.date}</p>
        <h3>{book.price}$</h3>
      </Link>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  badge: PropTypes.string,
  price: PropTypes.number,
};

export default Card;
