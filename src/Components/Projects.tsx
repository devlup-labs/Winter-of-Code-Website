import * as React from "react";
import { FaGithub } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { togglestate } from "../store/toggle";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField, Typography } from "@mui/material";
import { userstate } from "../store/user";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface project {
  _id: string;
  title: string;
  tag: string;
  description: string;
  mentor: string;
  technology: string;
}
const style = {
  position: "fixed" as "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "90%",
  maxHeight: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

const Projects = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClose2 = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen2(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose2}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose2}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const [open, setOpen] = React.useState(false);
  const [id, setid] = useState("");
  const [mentor, setmentor] = useState("");
  const [drive, setdrive] = useState("");
  const [title, settitle] = useState("");
  const [success, setsuccess] = useState("");
  const handleOpen = (id: string, mentor: string, title: string) => {
    setid(id);
    setmentor(mentor);
    settitle(title);
    setOpen(true);
  };
  const deleteproposal = async (title: string) => {
    if (user) {
      const resp = await axios.delete(
        `http://localhost:5000/deleteproposal?user_id=${user.id}&title=${title}`,
      );
      settoggle(null);
      setuser({ ...user, projects: resp.data.user.projects });
      console.log(resp.data);
    }
  };
  const [user, setuser] = useRecoilState(userstate);
  const handleClose = async (
    id: string,
    mentor: string,
    drive: string,
    title: string,
  ) => {
    console.log(id);
    if (user) {
      const resp = await axios.post(`http://localhost:5000/users/project`, {
        user: user.id,
        _id: id,
        proposal: {
          title: title,
          mentor: mentor,
          name: user.first_name + " " + user.last_name,
          drive: drive,
        },
      });
      console.log("hi");
      console.log(resp.data);
      setsuccess(resp.data.msg);
      setOpen2(true);
      setOpen(false);
      setIsChecked(false);
      settoggle(null);
      setuser({ ...user, projects: resp.data.user.projects });
    }
  };

  const [toggle, settoggle] = useRecoilState(togglestate);
  const [projects, setprojects] = useState<project[]>();
  useEffect(() => {
    const getprojects = async () => {
      const response = await axios.get("http://localhost:5000/projects");
      setprojects(response.data);
      console.log(user);
      console.log(user.projects);
      console.log(
        projects?.some((project) => project._id === user?.projects?.[1]._id),
      );
    };
    getprojects();
  }, []);
  return (
    <div className=" relative w-screen overflow-x-hidden h-screen ">
      <div
        className={` ${toggle === null ? "" : toggle ? "contract" : "expand"}`}
      >
        <div
          className=" flex justify-center md2:h-[180px] h-[120px] w-screen md2:absolute md2:top-0  z-1 "
          style={{ backgroundColor: "#1976d2" }}
        ></div>
        <div className="flex justify-center">
          <div className=" md2:my-[120px] bg-white md2:w-[808px] shadow-custom md2:absolute md2:top z-0  ">
            <div className="mx-8 my-5 text-[24px] fontstylish font-weight-400 text-blue-600">
              Projects
            </div>
            <div className="flex"></div>
            <div>
              {projects &&
                projects.length > 0 &&
                projects.map((x: project) => {
                  return (
                    <div className="mx-8">
                      <div className="fontstylish">
                        <div className="flex mx-2 mb-2 text-[21px] font-bold">
                          <h2>{x.title}</h2>
                          <div className="spacer"></div>
                          <div className="ml-auto">
                            <FaGithub
                              onClick={() => {
                                window.open(
                                  "https://github.com/devlup-labs",
                                  "_blank",
                                );
                              }}
                              className="mx-2 hover:cursor-pointer h-8"
                            ></FaGithub>
                          </div>
                        </div>
                        <div className="mx-2 text-[14px] mb-4">{x.tag}</div>
                        <div className="mx-2 scroll-m-12 md4">
                          <h5 className="font-semibold py-1">Mentors</h5>
                          <ul className="py-1 mx-2">
                            <li>{x.mentor}</li>
                          </ul>
                          <h5 className="font-semibold py-1 pb-5">
                            Technologies
                          </h5>
                          <span className="rounded-full  px-4 py-2 bg-gray-300">
                            {x.technology}
                          </span>
                          <h5 className="font-semibold py-1 pt-5">
                            Description
                          </h5>
                          <div className="my-5">{x.description}</div>
                          {user && user.role == "1" && (
                            <>
                              {user.projects?.some(
                                (project: project) => project._id === x._id,
                              ) ? (
                                <Button
                                  color="error"
                                  variant="contained"
                                  onClick={() => deleteproposal(x.title)}
                                >
                                  Delete Proposal
                                </Button>
                              ) : (
                                <Button
                                  variant="contained"
                                  onClick={() =>
                                    handleOpen(x._id, x.mentor, x.title)
                                  }
                                >
                                  Add Proposal
                                </Button>
                              )}

                              <Modal
                                open={open}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                              >
                                <Box sx={style}>
                                  <Typography
                                    id="modal-modal-title"
                                    variant="h6"
                                    component="h2"
                                    sx={{ margin: "15px" }}
                                  >
                                    Google Drive Link
                                  </Typography>
                                  <TextField
                                    sx={{ margin: "10px" }}
                                    fullWidth
                                    onChange={(e) => setdrive(e.target.value)}
                                  />
                                  <input
                                    className="m-[10px]"
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) =>
                                      setIsChecked(e.target.checked)
                                    }
                                  />
                                  <span>
                                    Gave view access for the proposal.
                                  </span>
                                  <br />
                                  <Button
                                    disabled={!isChecked}
                                    variant="contained"
                                    sx={{ margin: "10px" }}
                                    onClick={() => {
                                      console.log(x);
                                      handleClose(id, mentor, drive, title);
                                    }}
                                  >
                                    Submit
                                  </Button>
                                </Box>
                              </Modal>
                            </>
                          )}

                          <div className="spacer py-5"></div>
                          <hr></hr>
                          <div className="spacer py-5"></div>
                        </div>
                        <Snackbar
                          open={open2}
                          autoHideDuration={6000}
                          onClose={handleClose2}
                          message={success}
                          action={action}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;