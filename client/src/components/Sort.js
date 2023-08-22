export default function Sort({ setSortState }) {

    const handleSort = (e) => {
        const data = e.target.value;
        setSortState(data);
    };

    return (
        <form className="sort-container">
            <label htmlFor="sort">sort: </label>
            <select name="sort" className="sort-dropdown" id="sort" onChange={handleSort}>
                <option className="sort-option" value={JSON.stringify({})}>All</option>
                <option className="sort-option" value={JSON.stringify({ price: 1 })}>Price Low to High</option>
                <option className="sort-option" value={JSON.stringify({ price: -1 })}>Price High to Low</option>
                <option className="sort-option" value={JSON.stringify({ name: 1 })}>Name A to Z</option>
                <option className="sort-option" value={JSON.stringify({ name: -1 })}>Name Z to A</option>
            </select>
        </form>
    )
}