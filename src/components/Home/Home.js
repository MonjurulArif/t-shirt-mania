import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    // console.log(tshirt);
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      alert("t-shirt already added");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart); //newCart assigned to cart
      // alert("successfully added to cart");
    }
  };

  const handleRemoveItem = (tshirt) => {
    // console.log(tshirt);
    //
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
      </div>
    </div>
  );
};

export default Home;
