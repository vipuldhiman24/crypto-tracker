import React from "react";

function Coin({ name, icon, price, symbol, marketCap,rank }) {
  return (
    <div className="coin">
      <h1> Name: {name}</h1>
      <img src={icon} />
      <h3> Price: {price}</h3>
      <h3> Symbol: {symbol}</h3>
      <h3> marketcap:{marketCap}</h3>
      <h4> global rank:{rank}</h4>
    </div>
  );
}

export default Coin;