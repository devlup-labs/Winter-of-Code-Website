import Avatar from "../assets/avatar.png";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { togglestate } from "../store/toggle";
interface mentor {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  about_me: string;
  github: string;
}
const Mentors = () => {
  const [toggle, settoggle] = useRecoilState(togglestate);
  const accounts: mentor[] = [
    {
      id: 3,
      first_name: "Rohit",
      last_name: "Kori",
      email: "kori.1@iitj.ac.in",
      phone: "7440777945",
      about_me: "",
      github: "https://github.com/rohitkori",
    },
    {
      id: 4,
      first_name: "Saahil",
      last_name: "Bhavsar",
      email: "bhavsar.2@iitj.ac.in",
      phone: "9325220982",
      about_me: "I write clean and modular code",
      github: "https://github.com/XanderWatson/",
    },
    {
      id: 5,
      first_name: "Anadi",
      last_name: "Sharma",
      email: "sharma.130@iitj.ac.in",
      phone: "9826256162",
      about_me: "",
      github: "https://github.com/devlup-labs",
    },
    {
      id: 6,
      first_name: "Yuvraj",
      last_name: "Rathva",
      email: "rathva.1@iitj.ac.in",
      phone: "9510071874",
      about_me: "",
      github: "https://github.com/yuvrajrathva",
    },
    {
      id: 7,
      first_name: "Piyush",
      last_name: "Jhamnani",
      email: "jhamnani.1@iitj.ac.in",
      phone: "7014846842",
      about_me: "",
      github: "https://github.com/PJiyush",
    },
    {
      id: 8,
      first_name: "Jaimin",
      last_name: "Gajjar",
      email: "gajjar.2@iitj.ac.in",
      phone: "7567773545",
      about_me: "",
      github: "https://github.com/devlup-labs",
    },
    {
      id: 9,
      first_name: "Govind",
      last_name: "Mali",
      email: "mali.5@iitj.ac.in",
      phone: "+91 73782 31254",
      about_me: "",
      github: "https://github.com/govind72",
    },
  ];
  console.log(accounts);
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
              Mentors
            </div>
            <div className="italic m-5">
              You can also pitch your own project idea to these mentors. Feel
              free to contact any mentor via email/phone and talk to them about
              the project idea, ask the mentor to float the project if she/he
              agrees to mentor you with your proposed project. A mentor has to
              create the project for it to be considered a valid project.
            </div>
            {accounts.map((x: mentor) => {
              return (
                <div className="m-5 rounded-md shadow-md hover:rounded-2xl shadow-mentor duration-500 hover:scale-105 flex justify-between ">
                  <div className="md2:mx-10 text-center mx-5 my-8 font-weight-400 text-[24px] fontstylish">
                    {x.first_name} {x.last_name}
                    <div className="flex  justify-center">
                      <a
                        className="pr-2 py-4  text-[26px] h-20"
                        href="www.google.com"
                      >
                        <IoMail />
                      </a>
                      <a className="p-2 py-4" href="www.google.com">
                        <FaWhatsapp />
                      </a>
                      <a className="p-2 py-4" href="www.google.com">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <img
                    className=" md2:w-[130px] md:h-[130px] rounded-full m-8 w-[120px] h-[120px] md2:mx-20"
                    src={Avatar}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mentors;
