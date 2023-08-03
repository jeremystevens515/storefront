import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchQuery from "../pages/SearchQuery";
import ItemManager from "../pages/itemManager";

export default function Body() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchQuery />} />
            <Route path="/manage" element={<ItemManager />} />
        </Routes>
    );
}