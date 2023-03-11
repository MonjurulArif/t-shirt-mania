import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ ring }) => {
  //ring from Myself
  //importing context from Grandpa using useContext
  // const ringUsingContext = useContext(RingContext);
  //

  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h4>Special</h4>
      {/* <p>Gift: {ring}</p> */}
      {/* <p>Gift: {ringUsingContext}</p> */}
      <p>Gift: {house}</p>
      <button onClick={() => setHouse(house + 1)}>Increase</button>
    </div>
  );
};

export default Special;
