import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between h-[64px] shadow-slate-700 shadow-md"
      style={{ backgroundColor: "#1976d2" }}
    >
      <div className="flex items-center mx-12">
        <div className="mx-2 ">
          <RxHamburgerMenu className="h-12 w-5 text-white stroke-1" />
        </div>
        <div className="mx-2 text-white font-sans text-[0px] md:text-[22px] ">
          Winter of Code
        </div>
      </div>
      <button className="text-white border-white border-[1px] text-[15px] px-5 py-[6px] mx-10 rounded-sm ">
        LOG IN
      </button>
    </div>
  );
};
export default Navbar;
