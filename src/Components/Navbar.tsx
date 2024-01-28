import { IoMdHelpCircle } from "react-icons/io";
import { IoPeopleSharp, IoCodeSlash } from "react-icons/io5";
import { FaTachometerAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCalendarDays } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { togglestate } from "../store/toggle";

const Navbar: React.FC = () => {
  const [toggle, settoggle] = useRecoilState<boolean | null>(togglestate);

  const toggleSidebar = () => {
    toggle === null ? settoggle(true) : settoggle(!toggle);
  };

  const closeSidebar = () => {
    settoggle(false);
  };

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
          <a
            href="/"
            className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2"
          >
            <i className="fa fa-home mr-2">
              <FaHome className="h-6 w-6 text-gray-700 stroke-1" />
            </i>{" "}
            Home
          </a>
          <a
            href="/how-it-works"
            className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2"
          >
            <i className="fa fa-calendar mr-2">
              <FaCalendarDays className="h-6 w-6 text-gray-700 stroke-1" />
            </i>{" "}
            How It Works
          </a>
          <a
            href="/mentors"
            className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2"
          >
            <i className="material-icons mr-2">
              <IoPeopleSharp className="h-6 w-6 text-gray-700 stroke-1" />
            </i>{" "}
            Mentors
          </a>
          <a
            href="/projects"
            className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2"
          >
            <i className="fa fa-code mr-2">
              <IoCodeSlash className="h-6 w-6 text-gray-700 stroke-1" />
            </i>{" "}
            Projects
          </a>
          <a
            href="/"
            className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2"
          >
            <i className="fa fa-tachometer mr-2">
              <FaTachometerAlt className="h-6 w-6 text-gray-700 stroke-1" />
            </i>{" "}
            Dashboard
          </a>
          <a
            href="/help"
            className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2"
          >
            <i className="material-icons mr-2">
              <IoMdHelpCircle className="h-6 w-6 text-gray-700 stroke-1" />
            </i>{" "}
            Help
          </a>
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
        <button className="text-white border-white border-[1px] text-[15px] px-5 py-[6px] mx-10 rounded-sm">
          LOG IN
        </button>
      </div>
      {<Sidebar onClose={closeSidebar} />}
    </div>
  );
};

export default Navbar;
