import axios from "axios";
import { useEffect, useState } from "react";
interface idea {
  title: string;
  description: string;
  name: string;
}
const Dashboard = () => {
  const [ideas, setideas] = useState<idea[]>();
  useEffect(() => {
    const getideas = async () => {
      const resp = await axios.get("http://localhost:5000/pastprograms");
      console.log(resp.data);
      setideas(resp.data);
    };
    getideas();
  }, []);
  return (
    <div className="  flex justify-center bg-slate-200  w-screen h-screen">
      <div className="mt-[130px] bg-white w-[600px] flex shadow-custom">
        <div>hello</div>
        {ideas &&
          ideas.length > 0 &&
          ideas.map((x: idea) => {
            return <div className="">{x.title}</div>;
          })}
      </div>
    </div>
  );
};
export default Dashboard;
