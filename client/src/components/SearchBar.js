import { useState } from 'react';

export default function SearchBar({ setNameState }) {
    const [searchState, setSearchState] = useState("");

    const handleSearch = (e) => {
        // e.preventDefault();
        setNameState(searchState);
    }

    return (
        <div className="search-container">
            <input className="search-bar" type="text" placeholder="Search..." value={searchState} onChange={(e) => { setSearchState(e.target.value) }} />
            <button className="search-btn" type="submit" onClick={handleSearch}>Search</button>
        </div>
    )
}