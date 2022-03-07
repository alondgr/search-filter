import React, { useState } from 'react';
import '../Components/styles/app.css';
import SearchBar from './SearchBar';
import Result from './Result';
import CryptoData from '../Data.json';

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
      <SearchBar placeholder="Search for Blockchain/ Token..." data={CryptoData} chosenCrypto={chosenCrypto}
        setChosenCrypto={setChosenCrypto} setClicked={setClicked} />
      <Result value="Result" chosenCrypto={chosenCrypto} clicked={clicked} />
    </div>
  );
}

export default App;
