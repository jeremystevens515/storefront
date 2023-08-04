import { useQuery } from '@apollo/client';
import { QUERY_ALL_ITEMS } from '../utils/queries';

export default function ItemManager() {
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
                                    <button className="edit-btn">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};