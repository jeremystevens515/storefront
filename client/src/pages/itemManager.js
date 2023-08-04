import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_ITEMS } from '../utils/queries';

import EditModal from '../components/editModal';

export default function ItemManager() {
    const [showModal, setShowModal] = useState(false);

    const { loading, error, data } = useQuery(QUERY_ALL_ITEMS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <h1>Item Manager</h1>
            {data.items.map((item) => {
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
                                <p>Categories: {item.category.name}</p>
                                <div className="btn-container">
                                    <button className="edit-btn" onClick={() => {
                                        setShowModal(true);
                                    }}>Edit</button>
                                </div>
                            </div>
                        </div>
                        {showModal && createPortal(<EditModal onClose={() => setShowModal(false)} />, document.body)}
                    </div>
                )
            })}
        </div>
    )
};