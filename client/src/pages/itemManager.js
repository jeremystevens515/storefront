import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ITEMS } from '../utils/queries';

import EditModal from '../components/editModal';

export default function ItemManager() {
    const [modalItem, setModalItem] = useState();

    const { loading, error, data } = useQuery(QUERY_ALL_ITEMS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <h1>Item Manager</h1>
            {data.allItems.map((item) => {
                return (
                    <div key={item._id} className="item-container">
                        <div className="item-header">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="item-body">
                            <div className="item-image">
                                <img alt={item.name} />
                            </div>
                            <div className="item-content">
                                <p>Description: {item.description}</p>
                                <p>Price: ${item.price / 100} USD</p>
                                <ul>Categories: {item.category.map((cat) => <li key={cat._id}>{cat.name}</li>)}</ul>
                                <div className="btn-container">
                                    <button className="edit-btn" onClick={() => {
                                        setModalItem(item);
                                        document.querySelector('.edit-modal').showModal();
                                    }}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <dialog className="edit-modal">
                {modalItem ? <EditModal itemData={modalItem} /> : null}
            </dialog>
        </div>
    )
};