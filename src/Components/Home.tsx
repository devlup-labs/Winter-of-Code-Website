import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoMdFlash } from "react-icons/io";
import {BiLogoDiscord} from "react-icons/bi"
import { MdSupervisorAccount,MdBuild } from "react-icons/md";
const Home = () => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center h-[479px] bg-cover"
        style={{ backgroundImage: "url(https://i.imgur.com/We1DyJi.png)" }}
      >
      <div className="fontstylish text-[56px] font-weight-400">Winter Of Code</div>
        <div className=" fontstylish text-[26px] font-weight-400">Organized by</div>
        <div className=" fontstylish font-weight-400 text-[34px]">Devlup Labs</div>
      </div>
      
      <div className="bg-slate-100 ">
        <div className="flex justify-center text-[24px] py-10">
          The best way to engage in open source development
        </div>
        <div className=" grid grid-cols-3">
          <div className=" ml-5">
             <div className="flex justify-center">
           <MdSupervisorAccount className="h-12 w-12 m-3 flex text-blue-500"/>
           </div>
            <div className="flex justify-center text-[26px]">
              Working with experienced
            </div>
            <div className="flex text-[26px] justify-center">mentors</div>
            <div className="font-sans text-[18px] m-5">
              WoC is a place where you don’t just get to apply your skills but
              also get to acquire a bunch of new ones. WoC introduces you to the
              open source world and building code collaboratively while working
            
              under experienced mentors.
            </div>
          </div>
          <div  >
            <div className="flex justify-center">
           <MdBuild className="h-12 w-12 flex m-3 text-blue-500"/>
           </div>
            <div className="flex justify-center text-[26px]">
              Learn development
            </div>
            <div className="font-sans text-[18px] m-10">
              Develop the project codebase. Write up test suites. Add third
              party integrations and lots of other cool stuff depending on your
              project. After cooking up the perfect recipe, use Git to keep
              track of the changes and create your Pull Requests on GitHub.
            </div>
          </div>
          <div >
             <div className="flex justify-center">
           <IoMdFlash className="h-12 w-12 flex m-3 text-blue-500"/>
           </div>
            <div className="flex justify-center text-[26px]">
              Contribute to Open Source
            </div>
            <div className="font-sans text-[18px] m-10">
              During the 5 weeks of writing good code, you interact and share
              ideas with some great people. At the end of it, you’ve made great
              interactions with the mentors, and finally get ready to compete in
              GSoC'24.
            </div>
          </div>
        </div>
      </div>
      <div className="h-[320px] w-screen flex flex-col justify-center items-center" style={{backgroundImage:"url(https://i.imgur.com/WwDfTfH.png)"}}>
     <div className="text-[26px] text-white">Diving into open source development has never been simpler.</div>
      <div className="text-[15px] m-2 italic text-white">Now build something!</div>
      </div>
      <div className="flex justify-center text-[35px] my-20">
        Interested to know more?
      </div>
      <div className="flex justify-center">
        <a href="https://woc.devluplabs.tech/how-it-works" className="flex justify-center fontstylish py-2 hover:bg-slate-200 rounded-sm text-[16px] font-weight-400 text-slate-800 border-black border-[1px] m-2  w-[600px] ">
          SEE PROGRAM TIMELINE
        </a>
      </div>
      <div className="flex justify-center ">
        <a href="" className="flex justify-center fontstylish py-2 hover:bg-slate-200 rounded-sm text-slate-800 border-black border-[1px]  text-[16px] m-2 w-[600px]">
          STUDENT MANUAL
        </a>
      </div>
      <div className="flex justify-center">
        <a className="flex justify-center hover:bg-slate-200 fontstylish py-2 rounded-sm text-slate-800 text-[16px] border-black border-[1px] m-2 w-[600px] ">
          MENTOR MANUAL
        </a>

      </div>
      <div className="flex justify-center text-[35px] my-20">
        Login with your Gmail account to register as a student
      </div>

      <div className="flex justify-center">
        <a href="https://woc.devluplabs.tech/how-it-works" className="flex justify-center py-2  text-slate-800 rounded-sm hover:bg-slate-200  text-[16px] border-black border-[1px] m-2 w-[600px] fontstylish ">
          REGISTER
        </a>
      </div>
      <div className="text-[45px] font-weight-400 flex justify-center mt-20 mb-5">
        Contact Us
      </div>
      <div className="flex justify-center">
        <div>
          <div className=" my-2 flex mx-5 ">
            <FaGithub className="w-8 h-8 mx-5 " />
            <a className="text-blue-500" href="https://github.com/devlup-labs">
              devlup-labs
            </a>
          </div>
          <div className="my-2 flex mx-5">
            <BiLogoDiscord className="w-10 h-10 mx-5" />
            <a className="text-blue-500" href="https://github.com/devlup-labs">
              Discord
            </a>
          </div>
          <div className=" my-2 flex mx-5">
            <IoMail className="w-10 h-10 mx-5 " />
            <a className="text-blue-500" href="https://github.com/devlup-labs">
              devluplabs@itj.ac.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
