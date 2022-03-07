import React, { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Result from './Components/Result';
import CryptoData from './Data.json';

function App() {

  const [chosenCrypto, setChosenCrypto] = useState({
    id: "",
    name: "",
    symbol: "",
    blockchain: ""
  });

  const [clicked, setClicked] = useState(false)

  return (
    <div className="App">
      <SearchBar placeholder="Search for Crypto..." data={CryptoData} chosenCrypto={chosenCrypto}
        setChosenCrypto={setChosenCrypto} setClicked={setClicked} />
      <Result value="Result" chosenCrypto={chosenCrypto} clicked={clicked} />
    </div>
  );
}

export default App;
