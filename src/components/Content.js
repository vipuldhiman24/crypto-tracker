import React from 'react';
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from './Coin';

function Content() {

    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState("");
  
    useEffect(() => {
      Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
        (response) => {
          setListOfCoins(response.data.coins);
          console.log(response.data);
        }
      );
    }, []);
    
    const filteredCoins = listOfCoins.filter((coin) => {
      return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    });
  return (
    <div className='container'>
      <div>
        <div className="cryptoHeader">
         <div className='Search'>
         <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(event) => {
            setSearchWord(event.target.value);
           }}
        />
         </div>
      </div>
      


    <div className="cryptoDisplay">
   
        {filteredCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              marketCap={coin.marketCap}
              rank={coin.rank}
            />
          );
        })}
      </div>
    </div>
 
    </div>
     )
    }

export default Content