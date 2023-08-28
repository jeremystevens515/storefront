import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { QUERY_ITEM_BY_NAME } from '../utils/queries';


export default function SearchBar() {
    const [searchState, setSearchState] = useState("");
    const [search, { loading, error, data }] = useLazyQuery(QUERY_ITEM_BY_NAME, { variables: { name: searchState } });

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchState);
    }

    return (
        <div className="search-container">
            <input className="search-bar" type="text" placeholder="Search..." value={searchState} onChange={(e) => { setSearchState(e.target.value) }} />
            <button className="search-btn" type="submit" onClick={handleSearch}>Search</button>
        </div>
    )
}