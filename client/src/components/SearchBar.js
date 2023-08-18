export default function SearchBar() {
    return (
        <div className="search-container">
            <input className="search-bar" type="text" placeholder="Search..." />
            <button className="search-btn" type="submit">Search</button>
        </div>
    )
}