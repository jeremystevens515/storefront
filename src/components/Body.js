import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SearchQuery from "../pages/SearchQuery";

export default function Body() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchQuery />} />
        </Routes>
    );
}