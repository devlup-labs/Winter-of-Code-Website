import { useRecoilState } from "recoil";
import { togglestate } from "../store/toggle";

const Profile = () => {
    const [toggle, settoggle] = useRecoilState(togglestate);
    return (
      <div
        className={`overflow-x-hidden ${toggle === null ? "" : toggle ? "contract" : "expand"}`}>
            <div
          className=" flex justify-center md2:h-[180px] h-[120px] w-screen md2:absolute md2:top-0 md2:left-0 z-1 "
          style={{ backgroundColor: "#1976d2" }}>
        </div>
        <div className=" md2:my-[120px] bg-white md2:w-[808px] shadow-custom md2:absolute md2:top-0 md2:right-1/2 md2:transform md2:translate-x-1/2 z-0">
        <div className="mx-8 my-5 py-4 text-[44px] font-thin fontstylish font-weight-400 text-black text-center">
        Edit Profile
        </div>
        <div className="mx-8 my-5">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="email" label="Email" />
      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
      </div>
      </div>
    
        </div>
    );
};
export default Profile;