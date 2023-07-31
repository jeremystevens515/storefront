import { items } from "../assets/db/items_db";
import { users } from "../assets/db/users_db";

export default function Home() {
    return (
        <div className="home">
            <h1>Top Picks for You!</h1>
            {/* show advertisements based on user interests */}
            <div className="interest-section">
                {users[0].interests.map((interest, index) => {
                    return (
                        <section key={index}>
                            <h2 className="interest-header">{interest}</h2>
                            <div className="interest-items">
                                {items.map((item) => {
                                    if (interest === item.category) {
                                        return (
                                            <div key={item.id} className="item-card">
                                                <h3>{item.name}</h3>
                                                <img src={item.image} alt={item.name} />
                                                <p>{item.description}</p>
                                                <p>Price: ${item.price}</p>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}