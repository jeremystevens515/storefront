import { useQuery, useMutation } from "@apollo/client"
import { QUERY_ALL_CATEGORIES } from "../utils/queries";

export default function EditModal({ id }) {
    const { loading, error, data } = useQuery(QUERY_ALL_CATEGORIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <dialog id={id}>
            <form className="modal">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" />
                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" />
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" />
                <label htmlFor="category">Category:</label>
                <ul className="category-options">
                    {data.allCategories.map((category) => {
                        return (
                            <li key={category._id}>
                                <input type="checkbox" id={category.name} name={category.name} />
                                <label htmlFor={category.name}>{category.name}</label>
                            </li>
                        )
                    })}
                </ul>
                <div className="modal-btn-container">
                    <button className="form-btn" onClick={() => {
                        const modal = document.getElementById(id);
                        modal.close();
                    }}>Close</button>
                    <button className="form-btn" onClick={(event) => {
                        event.preventDefault();

                        console.log(document.getElementById('category').value)
                        const data = {
                            name: document.getElementById('name').value,
                            description: document.getElementById('description').value,
                            price: document.getElementById('price').value,
                            image: document.getElementById('image').value,
                            // category: [...document.getElementById('category').value]
                        }
                        console.log(data);
                        // const modal = document.getElementById(id);
                        // modal.close();
                    }}>Save</button>
                </div>
            </form>
        </dialog>
    )
}