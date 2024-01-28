import { useRecoilState } from "recoil";
import { FaCheckCircle } from "react-icons/fa";
import { togglestate } from "../store/toggle";
import { PiNumberCircleEightFill } from "react-icons/pi";
import { PiNumberCircleNineFill } from "react-icons/pi";
const Timeline = () => {
  const [toggle, settoggle] = useRecoilState(togglestate);

  return (
    <div
      className={`overflow-x-hidden w-screen h-screen bg-slate-100 ${toggle === null ? "" : toggle ? "contract" : "expand"}`}
    >
      <div
        className=" bg-cover bg-no-repeat bg-center sm:h-[500px] h-[300px]  w-full "
        style={{
          backgroundImage: "url(https://i.imgur.com/F0yCdfn.jpg)",
        }}
      ></div>
      <div className="text-[35px] m-10">How it Works ?</div>
      <div className="flex justify-center">
        <div className="bg-white shadow-custom w-screen mx-10 my-5">
          <div className="fontstylish font-weight-400 pt-10 px-10 text-[28px]">
            Students
          </div>
          <div className="px-10 text-[18px] fontstylish">
            Students contact the mentors they want to work with and write up a
            project proposal for the spring. If selected, students spend a month
            coding under the guidance of their mentors. They're also eligible
            for prizes and goodies.
          </div>
          <div className="fontstylish font-weight-400 px-10 mt-5 text-[28px]">
            Mentors
          </div>
          <div className="px-10 text-[18px] fontstylish">
            Willing seniors from institute or alumni can choose to mentor a
            student project. Mentors and students work together to determine
            appropriate milestones and requirements for the spring. Mentor
            interaction is a vital part of the program.
          </div>
          <div className="text-[35px] m-10">Timeline</div>
          <div className="w-full">
            <div className=" m-10 shadow-custom">
              <ul className="list-disc">
                <div className="flex ">
                  <li className=" py-6 px-5 list-none text-blue-600 text-[24px]">
                    <FaCheckCircle />
                  </li>
                  <li className="py-5 text-[20px] list-none text-blue-600 font-weight">
                    Fri Nov 24 2023 - Wed Dec 06 2023
                  </li>
                </div>
                <li className=" mx-11  text-[16px] font-weight-400">
                  Project Suggestion Period
                </li>
                <div className="flex ">
                  <li className=" list-none py-6 px-5  text-blue-600 text-[24px]">
                    <FaCheckCircle />
                  </li>

                  <li className=" py-5 list-none text-[20px] text-blue-600 font-weight">
                    Fri Dec 08 2023
                  </li>
                </div>
                <li className=" mx-11 text-[16px] font-weight-400">
                  Final Projects & Mentor Reveal
                </li>
                <div className="flex ">
                  <li className=" list-none py-6 px-5  text-blue-600 text-[24px]">
                    <FaCheckCircle />
                  </li>

                  <li className=" py-5 list-none text-[20px] text-blue-600 font-weight">
                    Sat Dec 09 2023 - Mon Dec 25 2023
                  </li>
                </div>
                <li className=" mx-11 text-[16px] font-weight-400">
                  Proposal Submission and Learning Period
                </li>
                <div className="flex ">
                  <li className=" list-none py-6 px-5  text-blue-600 text-[24px]">
                    <FaCheckCircle />
                  </li>

                  <li className=" list-none py-5 text-[20px] text-blue-600 font-weight">
                    Wed Jan 03 2024
                  </li>
                </div>
                <li className=" mx-11  text-[16px] font-weight-400">
                  Accepted mentee projects announced
                </li>
                <div className="flex ">
                  <li className=" list-none py-6 px-5  text-blue-600 text-[24px]">
                    <FaCheckCircle />
                  </li>

                  <li className="text-[20px] list-none py-5 text-blue-600 font-weight">
                    Fri Jan 05 2024
                  </li>
                </div>
                <li className=" mx-11 text-[16px] font-weight-400">
                  Coding Officially Begins!
                </li>
                <div className="flex ">
                  <li className=" py-6 list-none px-5  text-blue-600 text-[24px]">
                    <FaCheckCircle />
                  </li>

                  <li className="text-[20px] list-none py-5 text-blue-600 font-weight">
                    Wed Jan 24 2024
                  </li>
                </div>
                <li className=" mx-11 text-[16px] font-weight-400">
                  Mentors and mentees can begin submitting midterm evaluations
                </li>
                <div className="flex ">
                  <li className=" list-none py-6 px-5  text-blue-600 text-[24px]">
                    <FaCheckCircle />
                  </li>

                  <li className="text-[20px] list-none py-5 text-blue-600 font-weight">
                    Thu Jan 25 2024
                  </li>
                </div>
                <li className=" mx-11 text-[16px] font-weight-400">
                  Midterm evaluation deadline
                </li>
                <li className=" mx-11  text-[16px] font-weight-400">
                  Early incentives to top 3 progress projects
                </li>
                <div className="flex ">
                  <li className=" list-none py-6 px-5  text-slate-500 text-[26px]">
                    <PiNumberCircleEightFill />
                  </li>

                  <li className="text-[20px] list-none py-5 text-blue-600 font-weight">
                    Sun Feb 11 2024 - Sun Feb 18 2024
                  </li>
                </div>
                <li className=" mx-11 text-[16px] font-weight-400">
                  Final week: mentees submit their final work product and their
                  final mentor evaluation
                </li>
                <div className="flex ">
                  <li className="  list-none py-6 px-5  text-slate-500 text-[26px]">
                    <PiNumberCircleNineFill />
                  </li>

                  <li className="text-[20px] list-none py-5 text-blue-600 font-weight">
                    Sat Feb 24 2024
                  </li>
                </div>
                <li className=" mx-11 text-[16px] font-weight-400">
                  Results of WoC 2024 Announced
                </li>
                <li className=" mx-11 pb-10 text-[16px] font-weight-400">
                  Handing over the incentives in the closing ceremony
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Timeline;
