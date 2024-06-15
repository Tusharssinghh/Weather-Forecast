import React, { useState } from 'react';

const Search = ({ setCity, fetchWeather }) => {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        setCity(input);
        fetchWeather(input);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search">
            <input 
                type="text" 
                placeholder="Enter city name" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button onClick={handleSearch}>
                <img src="Imgs/search-interface-symbol.png" alt="searchButton" />
            </button>
        </div>
    );
};

export default Search;
