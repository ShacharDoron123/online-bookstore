import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookPage from "../pages/BookPage";


function Card(book) {

  let linkName = book.name;
  linkName = linkName.replaceAll(" ", "-");

  return (
    <div className="card">
      <Link to= {`/catalog/${linkName}`} >
       <img className="img-container" src={book.img}></img>
      <h3>{book.name}</h3>
      <p>{book.date}</p>
      </Link>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
