import Button from "@mui/material/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import logo from "../assets/devlup.png";
import { togglestate } from "../store/toggle";
import { useRecoilState } from "recoil";
import * as React from "react";
import { Transition } from "react-transition-group";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogContent from "@mui/joy/DialogContent";
import { Divider } from "@mui/material";
import { RxAvatar } from "react-icons/rx";
import { useState, useEffect } from "react";
import axios from "axios";
interface program {
  year: string;
  mentor: string;
  mentee: string;
  title: string;
  description: string;
  codelink: string;
  technology: string;
}
const ProjectCard = ({
  mentor,
  year,
  mentee,
  title,
  description,
  codelink,
  technology,
}: program) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <React.Fragment>
      <div className="m-3 ">
        <Card
          style={{
            borderRadius: "16px",
          }}
          sx={{
            overflow: "hidden",
            Width: 700,
            "@media(max-width: 480px)": {
              width: "300px",
              height: "420px",
            },
            width: "400px",
            height: "350px",
          }}
        >
          <div className="flex">
            <Chip
              size="md"
              style={{
                background: "#145ac4",
                color: "white",
              }}
              sx={{
                "--Chip-gap": "6px",
              }}
              variant="soft"
            >
              WOC
            </Chip>
            <Chip size="md" color="primary" variant="soft">
              {year}
            </Chip>
          </div>
          <div className="text-[24px] font-sans2 font-bold">{title}</div>
          <div className="flex justify-between">
            <div className="text-[24px] font-sans2 font-bold text-blue-600">
              Mentor
              <div className="flex text-[20px] text-black">{mentor}</div>
            </div>
            <div className="text-[24px] font-sans2 text-blue-600 font-bold">
              Contributors
              <div className="text-[20px] text-black">Rahul Reddy</div>
              <div className="text-[20px] text-black">Ishan Rajpurohit</div>
            </div>
          </div>
          <CardContent>
            <div className="text-[15px] text-slate-600 font-sans2 ">
              {description.slice(0, 140)}.
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={() => setOpen(true)}>
              View details
            </Button>
            <Button
              variant="contained"
              onClick={() => (window.location.href = codelink)}
            >
              View Code
            </Button>
          </CardActions>
        </Card>
        <Transition in={open} timeout={400}>
          {(state: string) => (
            <Modal
              keepMounted
              open={!["exited", "exiting"].includes(state)}
              onClose={() => setOpen(false)}
              slotProps={{
                backdrop: {
                  sx: {
                    opacity: 0,
                    backdropFilter: "none",
                    transition: `opacity 400ms, backdrop-filter 400ms`,
                    ...{
                      entering: { opacity: 1, backdropFilter: "blur(8px)" },
                      entered: { opacity: 1, backdropFilter: "blur(8px)" },
                    }[state],
                  },
                },
              }}
              sx={{
                visibility: state === "exited" ? "hidden" : "visible",
              }}
            >
              <ModalDialog
                sx={{
                  opacity: 0,
                  transition: `opacity 300ms`,
                  ...{
                    entering: { opacity: 1 },
                    entered: { opacity: 1 },
                  }[state],
                }}
              >
                <div className="text-blue-600 text-[20px] mx-3 font-sans2">
                  {title}
                </div>
                <DialogContent>
                  <div className="mx-3 my-1  flex justify-between font-sans2 font-extrabold text-black">
                    <div className="mr-10 text-[20px]">
                      <div className="ml-2"> Mentor</div>
                      <div className="flex ">
                        <RxAvatar className=" w-[40px]  text-blue-600 h-[30px]" />{" "}
                        {mentor}
                      </div>
                    </div>
                    <div className="text-[20px]">
                      Contributors<div>{mentee}</div>
                    </div>
                  </div>
                  <Divider style={{ background: "#A9A9A9" }} variant="middle" />
                  <div className="m-3 font-sans2">{description}</div>
                  <div className="flex flex-wrap">
                    <div className="sm:my-3 ml-3 mr-1  font-sans2 text-blue-600 font-bold">
                      technology :
                    </div>
                    <div className="sm:my-3 ml-3  font-sans2 text-black">
                      {technology}
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    onClick={() => (window.location.href = codelink)}
                  >
                    View Code
                  </Button>
                </DialogContent>
              </ModalDialog>
            </Modal>
          )}
        </Transition>
      </div>
    </React.Fragment>
  );
};
const Programs = () => {
  const [programs, setprograms] = useState<program[]>();
  useEffect(() => {
    const pastprograms = async () => {
      const resp = await axios.get("http://localhost:5000/pastprograms");
      console.log(resp);
      setprograms(resp.data);
    };
    pastprograms();
  }, []);
  const [toggle, settoggle] = useRecoilState(togglestate);
  return (
    <div
      className={`overflow-hidden ${toggle === null ? "" : toggle ? "contract" : "expand"}`}
    >
      <div
        style={{ backgroundColor: "#0b7cac" }}
        className="mt-[65px] w-screen h-[300px]"
      >
        <div className="flex justify-between border-3 border-black">
          <div className="p-5 md2:pl-[60px] text-[40px] font-sans2 font-extrabold  text-white  pt-[90px] pl-5">
            PAST PROGRAMS OF WOC
          </div>
          <img src={logo} className=" h-[317px]  " />
        </div>
      </div>
      <div className="flex font-stylish  sm:text-[30px]  mx-16 h-[50px] mt-[50px]">
        <input
          placeholder="Search Projects"
          className="sm:w-[900px] shadow-md shadow-slate-500 rounded-lg p-3 outline-none font-sans2 "
        />
        <button className="bg-blue-600 p-2 rounded-md font-sans2 shadow-md shadow-slate-500 text-white font-extrabold text-[20px] mx-3">
          Search
        </button>
      </div>
      <div className=" sm:flex  flex-wrap justify-center shadow-custom bg-slate-100 p-5 sm:mx-16 mx-8 my-8 ">
        {programs &&
          programs.length > 0 &&
          programs.map((x: program) => {
            return (
              <div className="flex justify-center">
                <ProjectCard
                  year={x.year}
                  mentor={x.mentor}
                  description={x.description}
                  title={x.title}
                  mentee={x.mentee}
                  technology={x.technology}
                  codelink={x.codelink}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Programs;
