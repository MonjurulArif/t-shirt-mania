import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item!!!</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Buy one for me</h3>
        <p>Buy one for you</p>
        <p>
          <small>Buy another one for me</small>
        </p>
      </div>
    );
  } else {
    message = <p>Thanks for buying</p>;
  }

  return (
    <div>
      <h3 className={cart.length === 2 ? `orange` : "purple"}>Order Summary</h3>
      <h4>Conditional Rendering</h4>
      <h5 className={`bold ${cart.length === 2 ? "blue" : "yellow"}`}>Order quantity: {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? <p>Gift to 3 persons</p> : <p> buy more</p>}
      <p>AND operator</p>
      {cart.length === 2 && <h2>Double items</h2>}
      <p>OR operator</p>
      {cart.length === 4 || <h2>item not 4</h2>}
    </div>
  );
};

export default Cart;

/*
Conditional Rendering
1. use element in a variable and then use  if else to set the value
2. ternary operation condition ? true statement : false statement
3. && operator (if condition is true, I want to display something)
4. || operator (if condition is false, I want to display something)
*/
