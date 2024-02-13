import Navbar from "./Components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Mentors from "./Components/Mentors";
import Help from "./Components/Help";
import { RecoilRoot } from "recoil";
import Timeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import Profile from "./Components/Profile";
import Programs from "./Components/Programs";

const App = () => {
  return (
    <div className="relative flex">
      <BrowserRouter>
        <RecoilRoot>
          <div className="fixed top-0 z-50 w-screen ">
            <Navbar />
          </div>
          <Routes>
            <Route path="/pastprogram" element={<Programs />} />
            <Route path="/" element={<Home />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/help" element={<Help />} />
            <Route path="/how-it-works" element={<Timeline />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
};
export default App;
