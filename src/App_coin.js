import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
  //     response.json().then((json) => {
  //       // console.log(json);
  //       setCoins(json);
  //       setIsLoading(false);
  //     })
  //   );
  // }, []);

  const getCoins = async () => {
    const json = await (
      await fetch("https://api.coinpaprika.com/v1/tickers")
    ).json();
    setCoins(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <div>
      <h1>The Coins!</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </li>
            ))}
          </ul> */}
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}

export default App;
