import React from 'react'



const Book = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.book.image} alt={props.book.title} />
        <div className="inner">
          <div>
            <h3>Title: {props.book.title}</h3>
            <h4>Price: ₹{props.book.price}</h4>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Book