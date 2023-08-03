import { useQuery } from '@apollo/client';
import { QUERY_ALL_ITEMS } from '../utils/queries';

export default function ItemManager() {
    const { loading, error, data } = useQuery(QUERY_ALL_ITEMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;



    return (
        <div>
            {data.items.map((item) => {
                return (
                    <div key={item._id}>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.category.name}</p>
                        <img alt={item.name} />
                    </div>
                )
            })}
        </div>
    )
};