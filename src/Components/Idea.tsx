import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { userstate } from "../store/user";

const Idea = () => {
  const [user, setuser] = useRecoilState(userstate);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const create_idea = async () => {
    if (user) {
      const resp = await axios.post("http://localhost:5000/idea", {
        name: user?.first_name + " " + user?.last_name,
        title: title,
        description: desc,
      });
      console.log(resp);
      settitle("");
      setdesc("");
    } else {
      alert("login to add idea");
    }
  };
  return (
    <div className="  w-screen h-screen bg-slate-100 flex justify-center">
      <div className=" p-4 my-[130px] font-sans2 shadow-custom bg-white h-[500px]  w-[400px]">
        <div className="flex justify-center text-blue-600 text-[30px]">
          Add Your Idea
        </div>
        <div className="m-10 flex justify-center h-[50px]">
          <TextField
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            fullWidth
            id="outlined-basic"
            className="text-[50px] h-[50px]"
            label="Title"
            variant="outlined"
          />
        </div>
        <div className="m-10 flex justify-center">
          <TextField
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            id="outlined-textarea"
            label="Description"
            placeholder="Description"
            multiline
            rows={5}
            fullWidth
          />
        </div>
        <div className="m-10">
          <Button variant="contained" onClick={create_idea}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Idea;
