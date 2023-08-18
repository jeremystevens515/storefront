export default function Sort() {
    return (
        <div className="sort-container">
            <label htmlFor="sort">sort: </label>
            <select name="sort" className="sort-dropdown" id="sort">
                <option className="sort-option" value="all">All</option>
                <option className="sort-option" value="price-low-high">Price Low to High</option>
                <option className="sort-option" value="price-high-low">Price High to Low</option>
                <option className="sort-option" value="name-a-z">Name A to Z</option>
                <option className="sort-option" value="name-z-a">Name Z to A</option>
            </select>
        </div>
    )
}