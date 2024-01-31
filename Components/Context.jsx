import React, { createContext,useState } from 'react';
import AllProducts from '../AllProducts';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < AllProducts.length+1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const Context = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  const addToCart = (itemId, e) => {
    e.preventDefault();
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1}));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems){
      if (cartItems[item] > 0) {
        let itemInfo = AllProducts.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
        }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    AllProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };
  return (
      <ShopContext.Provider value={contextValue}>
          {props.children}
    </ShopContext.Provider>
  )
}

export default Context;