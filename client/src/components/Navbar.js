import SearchBar from "./SearchBar"

export default function Navbar() {
    return (
        <nav>
            <div className="nav-top">
                <div>
                    theStorefront
                </div>
                <div>
                    account
                </div>
                <div>
                    cart
                </div>
            </div>
            <div>
                category dropdown
            </div>
            <SearchBar />
        </nav>
    )
};