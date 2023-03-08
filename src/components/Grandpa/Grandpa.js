import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

//context declaration to send context to far child
export const RingContext = createContext("Context ring");
export const MoneyContext = createContext(400);

const Grandpa = () => {
  // const house = 7;
  const ring = "diamond ring";
  const [house, setHouse] = useState(1);
  const [money, setMoney] = useState(555);

  return (
    // <RingContext.Provider value="Grandpa ring">
    <RingContext.Provider value={[house, setHouse]}>
      {/* <MoneyContext.Provider value={money}> */}
      <MoneyContext.Provider value={[money, setMoney]}>
        <div className="grandpa">
          <h2>Grandpa</h2>
          <h4>Use of Context API</h4>
          <section className="flex">
            <Father house={house} ring={ring}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
          </section>
        </div>
      </MoneyContext.Provider>
    </RingContext.Provider>
  );
};

export default Grandpa;
