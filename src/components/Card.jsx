import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(book) {
  let linkName = book.name;
  linkName = linkName.replaceAll(" ", "-");
  
  const getImageUrl = (path) => {
    if (!path) return "";
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  return (
    <div className="card">
      <Link to={`/catalog/${linkName}`}>
        <div className="badge-and-img-con">
          <img
            className="img-container"
            src={getImageUrl(book.img)}
            alt={book.name}
          />
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
