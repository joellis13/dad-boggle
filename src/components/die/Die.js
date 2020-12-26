import React from "react";

const Die = ({ dieNums }) => {
  const idx = Math.floor(Math.random() * 6)
  return <div>{dieNums[idx]}</div>;
};

export default Die;
