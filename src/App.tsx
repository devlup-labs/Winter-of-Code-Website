import Navbar from "./Components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Mentors from "./Components/Mentors";
const App = () => {
  return (
    <div className="relative">
      <BrowserRouter>
        <div className="fixed top-0 z-50 w-screen ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<Mentors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
