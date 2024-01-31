import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';
import { ShopContext } from './Context';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
    return (
      <>
        <div className="flex">
          <Link to="/" className="link main-logo">
            <img src={logo} className="logo" />
            <h6>Booklish</h6>
          </Link>
          <div className="flex2">
            <Link to="/" className="link home">
              Home
            </Link>
            <Link to="products" className="link">
              Products
            </Link>
            <Link to="cart" className="link">
              <img src={cart} className="cart"/>
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </div>
      </>
    );
}

export default Navbar