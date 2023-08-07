import { useQuery, useMutation } from "@apollo/client"
import { useState, useEffect } from "react";
import { QUERY_ALL_CATEGORIES } from "../utils/queries";
import { KnownTypeNamesRule } from "graphql";
import { set } from "mongoose";

export default function EditModal({ itemData, setDisplayModal }) {
    // extract category IDs from itemData to use as the categories state
    // allows for easier comparison of categories
    const catIDs = itemData.category.map((cat) => cat._id);

    const [name, setName] = useState(itemData.name);
    const [description, setDescription] = useState(itemData.description);
    const [price, setPrice] = useState(itemData.price);
    const [image, setImage] = useState(itemData.image);
    const [categories, setCategories] = useState(catIDs);

    const { loading, error, data } = useQuery(QUERY_ALL_CATEGORIES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const modal = document.querySelector(".edit-modal");
    console.log(modal)

    return (
        <dialog className="edit-modal">
            <form className="modal">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />

                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />

                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} />

                <label htmlFor="category">Category:</label>
                <ul className="category-options">
                    {data.allCategories.map((category) => {
                        return (
                            <li key={category._id}>
                                <input type="checkbox" id={category.name} name={category.name} checked={(categories.includes(category._id)) ? true : false}
                                    onChange={() => {
                                        if (categories.includes(category._id)) {
                                            setCategories(categories.filter((cat) => cat !== category._id));
                                        } else {
                                            setCategories([...categories, category._id]);
                                        }
                                    }} />
                                <label htmlFor={category.name}>{category.name}</label>
                            </li>
                        )
                    })}
                </ul>
                <div className="modal-btn-container">
                    <button className="form-btn" onClick={() => {
                        const modal = document.getElementById("edit-modal");
                        modal.close();
                        setDisplayModal(false);
                    }}>Close</button>
                    <button className="form-btn" onClick={(event) => {
                        event.preventDefault();

                        const data = {
                            name: name,
                            description: description,
                            price: price,
                            image: image,
                            category: categories
                        }

                    }}>Save</button>
                </div>
            </form>
        </dialog>
    )
}