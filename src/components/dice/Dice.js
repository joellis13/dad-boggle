import React from "react";
import diceArr from "../../constants/diceArrays";
import Die from "../die/Die";
import {shuffleDice, splitDiceIntoRows} from '../../helpers/DiceFunctions'

const Dice = () => {

  const shuffledDiceArr = shuffleDice(diceArr)
  const rows = splitDiceIntoRows(shuffledDiceArr)
  console.log(rows)

  const dice = shuffledDiceArr.map((die) => {
    return <Die dieNums={die} />;
  });
  return <div>{dice}</div>;
};

export default Dice;
