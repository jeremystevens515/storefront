import { useQuery, useMutation } from "@apollo/client"
import { useState } from "react";
import { QUERY_ALL_CATEGORIES } from "../utils/queries";
import { UPDATE_ITEM, DELETE_ITEM } from "../utils/mutation";

export default function EditModal({ itemData }) {
    // extract category IDs from itemData to use as the categories state
    // allows for easier comparison of categories
    const categoryIDs = itemData.category.map((cat) => cat._id);

    const [NameState, setNameState] = useState(itemData.name);
    const [DescriptionState, setDescriptionState] = useState(itemData.description);
    const [PriceState, setPriceState] = useState(itemData.price);
    const [ImageURLState, setImageURLState] = useState(itemData.image.url);
    const [ImageAltState, setImageAltState] = useState(itemData.image.alt);
    const [CategoriesState, setCategoriesState] = useState(categoryIDs);


    const { loading, error, data } = useQuery(QUERY_ALL_CATEGORIES);
    const [updateItem] = useMutation(UPDATE_ITEM);
    const [deleteItem] = useMutation(DELETE_ITEM);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const handleUpdateItem = () => {
        updateItem({
            variables: {
                id: itemData._id,
                content: {
                    name: NameState,
                    description: DescriptionState,
                    price: PriceState,
                    image: {
                        url: ImageURLState,
                        alt: ImageAltState
                    },
                    category: CategoriesState
                }
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    const handleDeleteItem = (e) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            deleteItem({
                variables: {
                    id: itemData._id
                }
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
        }
    };

    return (
        <form className="modal">
            <div className="edit-modal-header">
                <h2>Edit Item</h2>
                <div>
                    <button className="form-btn" onClick={() => {
                        const modal = document.getElementById("edit-modal");
                        modal.close();
                    }}>X</button>
                </div>
            </div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={NameState} onChange={(e) => setNameState(e.target.value)} />

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={DescriptionState} onChange={(e) => setDescriptionState(e.target.value)} />

            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" value={PriceState} onChange={(e) => setPriceState(Number(e.target.value))} />

            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" value={ImageURLState} onChange={(e) => setImageURLState(e.target.value)} />

            <label htmlFor="image">Image Alt:</label>
            <input type="text" id="image" name="image" value={ImageAltState} onChange={(e) => setImageAltState(e.target.value)} />

            <label htmlFor="category">Category:</label>
            <ul className="category-options">
                {data.allCategories.map((category) => {
                    return (
                        <li key={category._id} className="category-option">
                            <input type="checkbox" id={category.name} name={category.name} checked={(CategoriesState.includes(category._id)) ? true : false}
                                onChange={() => {
                                    if (CategoriesState.includes(category._id)) {
                                        setCategoriesState(CategoriesState.filter((cat) => cat !== category._id));
                                    } else {
                                        setCategoriesState([...CategoriesState, category._id]);
                                    }
                                }} />
                            <label htmlFor={category.name}>{category.name}</label>
                        </li>
                    )
                })}
            </ul>
            <div className="modal-btn-container">
                <button className="form-btn" onClick={handleUpdateItem}>Save</button>
                <button className="form-btn" onClick={handleDeleteItem}>Delete</button>
            </div>
        </form>
    )
}