import { useQuery, useMutation } from "@apollo/client"
import { useState } from "react";
import { QUERY_ALL_CATEGORIES } from "../utils/queries";
import { CREATE_ITEM } from "../utils/mutation";

export default function NewItemModal({ setCreatingItem }) {
    const [NameState, setNameState] = useState("");
    const [DescriptionState, setDescriptionState] = useState("");
    const [PriceState, setPriceState] = useState("");
    const [ImageURLState, setImageURLState] = useState("");
    const [ImageAltState, setImageAltState] = useState("");
    const [CategoriesState, setCategoriesState] = useState([]);

    const { loading, error, data } = useQuery(QUERY_ALL_CATEGORIES);
    const [createItem, { mutationLoading, mutationError, mutationData }] = useMutation(CREATE_ITEM);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const handleCreateItem = () => {
        try {
            createItem({
                variables: {
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
            });
        } catch (mutationError) {
            <div className="error">{mutationError.message}</div>
        }
    };

    return (
        <form className="modal">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={NameState} onChange={(e) => setNameState(e.target.value)} />

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={DescriptionState} onChange={(e) => setDescriptionState(e.target.value)} />

            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" value={PriceState} onChange={(e) => setPriceState(Number(e.target.value))} />

            <label htmlFor="image">Image URL:</label>
            <input type="text" id="image" name="image" value={ImageURLState} onChange={(e) => setImageURLState(e.target.value)} />
            <label htmlFor="image-alt">Image Alt:</label>
            <input type="text" id="image-alt" name="image-alt" value={ImageAltState} onChange={(e) => setImageAltState(e.target.value)} />

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
                <button className="form-btn" onClick={() => {
                    const modal = document.querySelector("#item-modal");
                    modal.close();
                }}>Close</button>
                <button className="form-btn" onClick={handleCreateItem}>Save</button>
            </div>
        </form>
    )
}