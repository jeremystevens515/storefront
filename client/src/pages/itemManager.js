import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ITEMS } from '../utils/queries';

import EditModal from '../components/EditModal';
import Sort from '../components/Sort';
import SearchBar from '../components/SearchBar';
import NewItem from '../components/NewItem';

export default function ItemManager() {
    const [modalItem, setModalItem] = useState();
    const [sortState, setSortState] = useState();
    const [nameState, setNameState] = useState("");

    const { loading, error, data } = useQuery(QUERY_ALL_ITEMS, { variables: { sort: sortState, name: nameState } });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <h1>Item Manager</h1>
            <div className="manager-nav">
                <div className="nav-section">
                    <SearchBar setNameState={setNameState} />
                    <Sort setSortState={setSortState} />
                </div>
                <div>
                    <NewItem />
                </div>
            </div>
            {!data ? <p>Begin query by clicking the search button</p> : null}
            {data?.allItems.map((item) => {
                return (
                    <div key={item._id} className="item-container">
                        <div className="item-header">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="item-body">
                            <img className="item-image" src={item.image.url} alt={item.image.alt} />
                            <div className="item-content">
                                <section>
                                    <h4>Description:</h4>
                                    <p>{item.description}</p>
                                </section>
                                <section>
                                    <h4>Price:</h4>
                                    <p>${item.price / 100} USD</p>
                                </section>
                                <div className="display-categories">
                                    <h4>Categories:</h4>
                                    <ul>
                                        {item.category.map((cat) => <li key={cat._id}>{cat.name}</li>)}
                                    </ul>
                                </div>
                                <div className="btn-container">
                                    <button className="edit-btn" onClick={() => {
                                        setModalItem(item);
                                        document.querySelector("#edit-modal").showModal();
                                    }}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <dialog id="edit-modal">
                {modalItem ? <EditModal itemData={modalItem} /> : null}
            </dialog>
        </div>
    )
};