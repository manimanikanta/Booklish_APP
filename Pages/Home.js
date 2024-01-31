import React from 'react';
import { Link } from 'react-router-dom';
import Books from '../assets/Books.png';
import data from '../Featured.js';
import Item from '../Components/Item/Item.jsx';

const Home = () => {
    return (
      <>
        <div className="hero-sec">
          <div className="hero-content">
            <h1>We are changing the way people experience the world</h1>
            <p>
              Intelligence is in being able to make people understand what they could not understand. Intelligence is not in confusing the hell
              out of what people knew perfectly well for ages, That's not intelligence.
            </p>
            <Link to="products" className="link btn">
              Our Products
            </Link>
          </div>
          <div>
            <img src={Books} className="hero-img" />
          </div>
        </div>
        <section className="featured">
          <h1>Featured Products</h1>
          <hr className="featured-hr" />
          <div className="featured-item">
            {data.map((item) => {
              return (
                <Item
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </section>
      </>
    );
}

export default Home