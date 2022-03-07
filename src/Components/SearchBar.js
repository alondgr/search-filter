import React, { useState } from 'react';
import '../Components/styles/searchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBar({ placeholder, data, chosenCrypto, setChosenCrypto, setClicked }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEnterd, setWordEntered] = useState('');

    const handleFilter = (event) => {
        const searchTerm = event.target.value;
        setWordEntered(searchTerm);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        if (searchTerm === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        };
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    };

    const chosen = (e) => {
        clearInput()
        setClicked(true);
        setWordEntered(e.target.id)
        const currCrypto = data.filter((value) => {
            return value.name.toLowerCase() === e.target.id.toLowerCase();
        });
        setChosenCrypto(currCrypto[0]);
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEnterd} onChange={handleFilter} />
                <div className="searchIcon">
                    {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value, index) => {
                        return <div key={index} className="dataItem" onClick={(e) => chosen(e)} id={value.name}>
                            {value.name}
                        </div>
                    })}
                </div>
            )}
        </div>
    );
};
