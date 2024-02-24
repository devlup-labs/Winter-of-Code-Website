import * as React from "react";
import { IoMdHelpCircle } from "react-icons/io";
import { IoPeopleSharp, IoCodeSlash } from "react-icons/io5";
import { FaTachometerAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCalendarDays } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdContentPasteSearch } from "react-icons/md";
import { Avatar, Box, Typography } from "@mui/material";
import { userstate } from "../store/user";
import { togglestate } from "../store/toggle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import axios from "axios";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface Mentor {
  id: string;
  name: string;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Navbar: React.FC = () => {
  const [open4, setOpen4] = React.useState(false);
  const [open3, setOpen3] = useState(false);

  const handleClose4 = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen4(false);
  };
  const action2 = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose4}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose4}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const handleClick3 = () => {
    setOpen3(true);
  };

  const handleClose3 = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen3(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose3}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose3}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const [mentors, setmentors] = useState<Mentor[]>();
  const accept = async (Id: string) => {
    if (user) {
      const resp = await axios.post("http://localhost:5000/acceptmentor", {
        id: Id,
      });
      console.log(resp);
      const resp2 = await axios.get("http://localhost:5000/getrequests");
      setmentors(resp2.data);
      handleClick3();
    }
  };
  const [open2, setOpen] = React.useState(false);
  const handleOpen = async () => {
    const resp = await axios.get("http://localhost:5000/getrequests");
    console.log(resp.data);
    setmentors(resp.data);
    setOpen(true);
  };
  const handleClose2 = () => setOpen(false);
  const [user, setuser] = useRecoilState(userstate);
  const request = async () => {
    if (user) {
      const resp = await axios.post("http://localhost:5000/tobementor", {
        id: user.id,
        name: user.first_name + " " + user.last_name,
      });
      setsuccess(resp.data.msg);
      setOpen4(true);
      setAnchorEl(null);
      console.log(resp);
    }
  };
  const [toggle, settoggle] = useRecoilState<boolean | null>(togglestate);

  const toggleSidebar = () => {
    toggle === null ? settoggle(true) : settoggle(!toggle);
  };

  const closeSidebar = () => {
    settoggle(false);
  };
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    settoggle(null);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [success, setsuccess] = useState("");
  const Sidebar: React.FC<{ onClose: () => void }> = () => {
    return (
      <aside
        className={`fixed w-[300px]  bg-white  shadow-custom mt-16 opacity-95  ${
          toggle === null
            ? "hidden"
            : toggle
              ? "activeDrawer"
              : "inactiveDrawer"
        }`}
        data-booted={true}
      >
        <div
          className="py-4 pl-4 pr-8 w-300 grid gap-2"
          style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}
        >
          <Link to={"/"}>
            <div className="hover:bg-slate-100 py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
              <i className="fa fa-home mr-2">
                <FaHome className="h-6 w-6 text-gray-700 stroke-1" />
              </i>{" "}
              Home
            </div>
          </Link>
          <Link to={"/how-it-works"}>
            <div className="hover:bg-slate-100  py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
              <i className="fa fa-calendar mr-2">
                <FaCalendarDays className="h-6 w-6 text-gray-700 stroke-1" />
              </i>{" "}
              How It Works
            </div>
          </Link>
          <Link to={"/mentors"}>
            <div className="py-2 px-4 hover:bg-slate-100 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
              <i className="material-icons mr-2">
                <IoPeopleSharp className="h-6 w-6 text-gray-700 stroke-1" />
              </i>{" "}
              Mentors
            </div>
          </Link>
          <Link to={"/ideas"}>
            <div className="py-2 px-4 text-primary-dark hover:bg-slate-100 border-l-4 border-primary-dark flex align-middle gap-2">
              <i className="fa fa-code mr-2">
                <IoCodeSlash className="h-6 w-6 text-gray-700 stroke-1" />
              </i>
              Ideas
            </div>
          </Link>
          <Link to={"/projects"}>
            <div className="py-2 px-4 text-primary-dark hover:bg-slate-100 border-l-4 border-primary-dark flex align-middle gap-2">
              <i className="fa fa-code mr-2">
                <IoCodeSlash className="h-6 w-6 text-gray-700 stroke-1" />
              </i>{" "}
              Projects
            </div>
          </Link>
          {user && user.role == "1" ? (
            <Link to={"/myprojects"}>
              <div className="py-2 px-4 text-primary-dark border-l-4 hover:bg-slate-100 border-primary-dark flex align-middle gap-2">
                <i className="fa fa-tachometer mr-2">
                  <FaTachometerAlt className="h-6 w-6 text-gray-700 stroke-1" />
                </i>{" "}
                MyProjects
              </div>
            </Link>
          ) : (
            user &&
            user.role == "2" && (
              <Link to={"/proposals"}>
                <div className="py-2 px-4 text-primary-dark border-l-4 hover:bg-slate-100 border-primary-dark flex align-middle gap-2">
                  <i className="fa fa-tachometer mr-2">
                    <FaTachometerAlt className="h-6 w-6 text-gray-700 stroke-1" />
                  </i>{" "}
                  Proposals
                </div>
              </Link>
            )
          )}
          <Link to={"/pastprogram"}>
            <div className="py-2 px-4 text-primary-dark hover:bg-slate-100 border-l-4 border-primary-dark flex align-middle gap-2">
              <i className="fa fa-code mr-2">
                <MdContentPasteSearch className="h-6 w-6 text-gray-700 stroke-1" />
              </i>{" "}
              PastProgram
            </div>
          </Link>

          <Link to={"/help"}>
            <div className=" hover:text-blue-500 py-2 px-4 text-primary-dark border-l-4 hover:bg-slate-100 border-primary-dark flex align-middle gap-2">
              <i className="material-icons mr-2">
                <IoMdHelpCircle className="h-6 w-6 text-gray-700 stroke-1" />
              </i>{" "}
              Help
            </div>
          </Link>
        </div>
        <div className="border-t border-gray-200"></div>
      </aside>
    );
  };

  return (
    <div>
      <div
        className="flex items-center justify-between h-[64px] shadow-slate-700 shadow-md"
        style={{ backgroundColor: "#1976d2" }}
      >
        <div className="flex items-center mx-12">
          <div className="mx-2" onClick={toggleSidebar}>
            <RxHamburgerMenu className="h-12 w-5 text-white stroke-1 hover:cursor-pointer" />
          </div>
          <div className="mx-2 text-white font-sans text-[0px] md:text-[22px]">
            Winter of Code
          </div>
        </div>
        {!localStorage.getItem("access_token") ? (
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="text-white border-white border-[1px] text-[15px] px-5 py-[6px] mx-10 rounded-sm"
          >
            LOG IN
          </button>
        ) : (
          user && (
            <div>
              <Avatar
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="mx-5 border-2 border-blue-600 w-[60px]"
                alt={user.first_name}
                src={user.image}
              />

              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    navigate("/profile");
                  }}
                >
                  Profile
                </MenuItem>
                {user.role == "1" ? (
                  <MenuItem onClick={request}>Mentor Request</MenuItem>
                ) : (
                  user.role == "scrummaster" && (
                    <MenuItem onClick={handleOpen}>Requests</MenuItem>
                  )
                )}
                <Modal
                  open={open2}
                  onClose={handleClose2}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Requests to be Mentors
                    </Typography>
                    <div>
                      {mentors &&
                        mentors.length > 0 &&
                        mentors.map((x: Mentor) => {
                          return (
                            <div className="flex justify-between">
                              <div>{x.name}</div>
                              <Button
                                variant="contained"
                                onClick={() => {
                                  accept(x.id);
                                }}
                              >
                                Accept Request
                              </Button>
                            </div>
                          );
                        })}
                    </div>
                  </Box>
                </Modal>
                <MenuItem
                  onClick={() => {
                    setAnchorEl(null);
                    localStorage.removeItem("access_token");
                    navigate("/login");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
              <Snackbar
                open={open3}
                autoHideDuration={6000}
                onClose={handleClose3}
                message="Accepted Request"
                action={action}
              />

              <Snackbar
                open={open4}
                autoHideDuration={6000}
                onClose={handleClose4}
                message={success}
                action={action2}
              />
            </div>
          )
        )}
      </div>
      {<Sidebar onClose={closeSidebar} />}
    </div>
  );
};

export default Navbar;
