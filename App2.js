import { useState, useEffect } from "react";

function App2() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dallor, setDallor] = useState("");
  const [cost, setCost] = useState();

  const onChange = (event) => setDallor(event.target.value);
  const calcost = (event) => {
    setCost(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  console.log(dallor);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((Response) => Response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setCost(json[0].quotes.USD.price);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>

      {loading ? <strong>Loading...</strong> : null}

      <select onChange={calcost}>
        {coins.map((coin, index) => (
          <option key={index} value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>

      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={dallor}
          type="number"
          placeholder="Write $ got you"
        />
        <button>Click</button>
        {cost > 0 ? <h1>교환 가능 코인 {dallor / cost}</h1> : null}
      </form>
    </div>
  );
}

export default App2;
