import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
