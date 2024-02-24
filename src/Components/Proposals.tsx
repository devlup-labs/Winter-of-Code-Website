import { useRecoilState } from "recoil";
import { userstate } from "../store/user";
import { useEffect, useState } from "react";
import axios from "axios";
import { SiGoogledocs } from "react-icons/si";
import { togglestate } from "../store/toggle";
import { useNavigate } from "react-router-dom";

interface Proposal {
  id: "string";
  drive: "string";
  name: "string";
  mentor: "string";
  title: "string";
}
const Proposal = () => {
  const navigate = useNavigate();
  const [toggle, settoggle] = useRecoilState(togglestate);
  const [proposal, setproposal] = useState<Proposal[]>();
  const [user, setuser] = useRecoilState(userstate);

  useEffect(() => {
    const getproposals = async () => {
      console.log(user);
      if (user) {
        if (user.role != "2") {
          navigate("/");
        }
        const resp = await axios.get(
          `http://localhost:5000/proposals/${user.first_name} ${user.last_name}`,
        );
        console.log(resp);
        setproposal(resp.data);
      }
    };
    getproposals();
  }, [user]);
  return (
    <div className="border-2 border-black relative w-screen overflow-x-hidden h-screen ">
      <div
        className={` overflow-hidden ${toggle === null ? "" : toggle ? "contract" : "expand"}`}
      >
        <div
          className=" flex justify-center md2:h-[180px] h-[120px] w-screen md2:absolute md2:top-0  z-1 "
          style={{ backgroundColor: "#1976d2" }}
        ></div>
        <div className="flex justify-center ">
          <div className="bg-white md2:w-[808px]  shadow-custom md2:absolute md2:top-32   z-0  ">
            <div className="mx-8 my-5 text-[24px] fontstylish font-weight-400 text-blue-600">
              Proposals
            </div>
            <div className="italic m-5">
              Welcome to our project proposal page, where students showcase
              their innovative ideas and ambitious plans. Here, you'll find a
              diverse array of projects spanning various disciplines, from
              technology to social sciences, all conceived and crafted by our
              talented students.
            </div>
            {proposal &&
              proposal.map((x: Proposal) => {
                return (
                  <div className="m-5 rounded-md shadow-md hover:rounded-2xl shadow-mentor duration-500 hover:scale-105 flex justify-between ">
                    <div className="md2:mx-10 text-center mx-5 my-8 font-weight-400 text-[24px] fontstylish font-bold font-sans2">
                      Name : {x.name}
                      <div className="md2:mx-10 text-center mx-5 my-8 font-weight-400 text-[24px] fontstylish ">
                        Project : {x.title}
                      </div>
                    </div>
                    <a href={x.drive}>
                      <SiGoogledocs className=" md2:w-[130px] md:h-[130px] text-blue-400 m-8 w-[120px] h-[120px] md2:mx-10" />
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proposal;
