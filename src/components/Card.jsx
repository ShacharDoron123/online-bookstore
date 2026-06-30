
function Card(book){
    return(
        <div>
            <h3>{book.name}</h3>
            <p>{book.date}</p>
        </div>
    );
}

export default Card