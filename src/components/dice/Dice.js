import React from "react";
import diceArr from "../../constants/diceArrays";
import diceArray from "../../constants/diceArrays";
import Die from "../die/Die";

const Dice = () => {
  const dice = diceArr.map((die) => {
    return <Die dieNums={die} />;
  });
  return <div>{dice}</div>;
};

export default Dice;
