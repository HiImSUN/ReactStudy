import { useState, useEffect } from "react";
function App() {
  const [isLoading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data); // Update the state with the fetched data
        setLoading(false); // Set loading to false after data is fetched
      });
  }, []);
  return (
    <div>
      <h1>World's COINS!! {isLoading ? "" : `(${coins.length})`}</h1>
      {isLoading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
