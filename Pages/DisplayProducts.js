import React, { useContext } from 'react';
import { ShopContext } from '../Components/Context.jsx';
import Item from '../Components/Item/Item.jsx';

const DisplayProducts = (props) => {
  const { AllProducts } = useContext(ShopContext);
  return <>
    <section>
      <div className="banner">
        <img src={props.banner} className="banner-img"/>
      </div>
      <div className="products">
        {AllProducts.map((item, i) => {
          return(
          <Item
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            />
          )
        })}
      </div>
    </section>
  
  
  </>
}

export default DisplayProducts