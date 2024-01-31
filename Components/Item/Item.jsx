import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`} onClick={window.scrollTo(0,0)}>
        <img src={props.image} className="item-img" alt=" " />
      </Link>
      <p>{props.name}</p>
      <div className="item-price">₹ {props.price}</div>
    </div>
  );
}

export default Item;