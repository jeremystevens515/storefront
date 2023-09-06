import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

export default function UserHome() {
    const QUERY_USER = gql`
        query getUser($id: ID!) {
            userByID(_id: $id) {
            _id
            cart {
                _id
                name
            }
            interests {
                _id
                name
                items {
                    _id
                    name
                    image {
                        url
                        alt
                    }
                }
            }
            username
            wishlist {
                _id
                name
                image {
                alt
                url
                }
            }
            }
        }
    `;

    const { loading, error, data } = useQuery(QUERY_USER, { variables: { id: "64eced9ad3682b441e3dbf79" } });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error}</p>;

    return (
        <div className="home">
            <h1>Hello, {data.userByID.username}!</h1>
            <h2>Products Based On Your Interests</h2>
            <h4>"The More You Spend, the More You Save" - Jesen Huang</h4>
            {data.userByID.interests.map((interest) => {
                return (
                    <div key={interest._id}>
                        <h2>{interest.name}</h2>
                        {interest.items.map((item) => {
                            return (
                                <div>{item.name}</div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}