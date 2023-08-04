import { useQuery } from "@apollo/client"
import { QUERY_ALL_CATEGORIES } from "../utils/queries";

export default function EditModal() {
    const { loading, error, data } = useQuery(QUERY_ALL_CATEGORIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <form className="modal">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" />
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" />
            <label htmlFor="category">Category:</label>
            <ul className="category-options">
                {data.categories.map((category) => {
                    return (
                        <li key={category._id}>
                            <input type="checkbox" id={category.name} name={category.name} />
                            <label htmlFor={category.name}>{category.name}</label>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={onclose}>Close</button>
                <button>Save</button>
            </div>
        </form>
    )
}