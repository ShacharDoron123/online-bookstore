import PropTypes from "prop-types";

function Card(book) {
  return (
    <div>
      <h3>{book.name}</h3>
      <p>{book.date}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
