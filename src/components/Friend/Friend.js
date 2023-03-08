import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Friend = () => {
  // const ringFromContext = useContext(RingContext);
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h4>Friend</h4>
      <p>
        {/* <small>Ring: {ringFromContext}</small> */}
        <small>House: {house}</small>
        <button onClick={() => setHouse(house - 1)}>Decrease</button>
      </p>
    </div>
  );
};

export default Friend;
