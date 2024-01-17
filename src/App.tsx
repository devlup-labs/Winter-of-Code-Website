import Navbar from "./Components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="fixed w-screen z-0">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
