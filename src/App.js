import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Body />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
