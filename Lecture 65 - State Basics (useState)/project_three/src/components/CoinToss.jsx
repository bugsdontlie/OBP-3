import { useState } from "react";

function CoinToss() {
  const [tossResult, setTossResult] = useState("");
  function tossCoin() {
    let randomIndex;

    const sides = ["Heads", "Tails"];
    randomIndex = Math.floor(Math.random() * 2);

    setTossResult(sides[randomIndex]);
  }
  return (
    <>
      <h1>Click below to toss the coin</h1>
      <button onClick={tossCoin}>Toss</button>
      <p>{tossResult}</p>
    </>
  );
}

export default CoinToss;
