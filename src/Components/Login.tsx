import { useRecoilState } from "recoil";
import { togglestate } from "../store/toggle";
import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userstate } from "../store/user";
const Login = () => {
  const navigate = useNavigate();
  const [toggle, settoggle] = useRecoilState(togglestate);
  const [user, setuser] = useRecoilState(userstate);
  const login = useGoogleLogin({
    onSuccess: async ({ code }) => {
      console.log(code);
      const userinfo = await axios.post("http://localhost:5000/auth/google", {
        code,
      });
      console.log(userinfo);
      if (userinfo.data.success) {
        setuser({
          email: userinfo.data.user.email,
          id: userinfo.data.user?.id,
          first_name: userinfo.data.user.given_name,
          last_name: userinfo.data.user.family_name,
          image: userinfo.data.user.picture,
        });
        console.log(user);
        localStorage.setItem("access_token", userinfo.data.token);
        localStorage.setItem("refresh-token", userinfo.data.refresh);
        navigate("/profile");
      } else {
        alert(userinfo.data.error);
      }
    },
    flow: "auth-code",
  });

  return (
    <div
      className={` w-screen h-screen mt-[130px]  flex justify-center  overflow-x-hidden ${toggle === null ? "" : toggle ? "contract" : "expand"}`}
    >
      <div className="w-[300px] h-[300px] py-20 shadow-custom flex justify-center ">
        <Button onClick={login} className=" h-[60px]" variant="contained">
          SignIn with Google
        </Button>
      </div>
    </div>
  );
};
export default Login;
