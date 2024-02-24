import Navbar from "./Components/Navbar";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Mentors from "./Components/Mentors";
import Help from "./Components/Help";
import Timeline from "./Components/Timeline";
import Projects from "./Components/Projects";
import Profile from "./Components/Profile";
import Programs from "./Components/Programs";
import Login from "./Components/Login";
import Idea from "./Components/Idea.tsx";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userstate } from "./store/user";
import axios from "axios";
import Myprojects from "./Components/Myprojects.tsx";
import Proposal from "./Components/Proposals.tsx";
const App = () => {
  const [user, setuser] = useRecoilState(userstate);
  const token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh-token");
  useEffect(() => {
    const getuser = async () => {
      const userinfo = await axios.post("http://localhost:5000/token", {
        access_token: token,
        refresh_token: refresh_token,
      });
      if (userinfo.data.success) {
        setuser({
          id: userinfo.data.user.id,
          first_name: userinfo.data.user.first_name,
          last_name: userinfo.data.user.last_name,
          image: userinfo.data.image,
          email: userinfo.data.user.email,
          role: userinfo.data.user.role,
          branch: userinfo.data.user.branch,
          year: userinfo.data.user.year,
          phonenumber: userinfo.data.user.phonenumber,
          githublink: userinfo.data.user.githublink,
          gender: userinfo.data.user.gender,
          projects: userinfo.data.user?.projects,
        });
        localStorage.setItem("access_token", userinfo.data.access_token);
      } else {
        localStorage.removeItem("access_token");
      }

      console.log(user);
      console.log(userinfo);
    };
    getuser();
  }, []);
  return (
    <div className="relative flex">
      <BrowserRouter>
        <div className="fixed top-0 z-50 w-screen ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/proposals" element={<Proposal />} />
          <Route path="/myprojects" element={<Myprojects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pastprogram" element={<Programs />} />
          <Route path="/" element={<Home />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/help" element={<Help />} />
          <Route path="/ideas" element={<Idea />} />
          <Route path="/how-it-works" element={<Timeline />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
