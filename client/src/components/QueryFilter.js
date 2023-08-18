import { useState } from "react";
import { createPortal } from "react-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_CATEGORIES } from "../utils/queries";

export default function QueryFilter() {
    const { loading, error, data } = useQuery(QUERY_ALL_CATEGORIES);
    const [CategoriesState, setCategoriesState] = useState([]);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div>
            <button className="filter-btn" onClick={() => setShowSidebar(true)}>filter</button>
            {showSidebar && createPortal(
                <div className="sidebar">
                    <div>Price Range: </div>
                    <ul className="filter-categories">
                        By Category:
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
                    <button onClick={() => setShowSidebar(false)}>close</button>
                </div>, window.document.body
            )}
        </div>
    )
}