import { FaGithub } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { togglestate } from "../store/toggle";

interface project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  mentor: string;
  tech: string;
}

const Projects = () => {
  const [toggle, settoggle] = useRecoilState(togglestate);
  const accounts: project[] = [
    {
      id: 1,
      title: "Travel Companion",
      tagline: "Seamlessly find travel companions. No more solo journeys!",
      description:
        "Mostly we find someone from our college who can travel with us, but we fail to do so because sometimes we think it’s troublesome to ask anyone or ask in groups “Will there be anyone going from A to B”. For this, we can think of an App on which anyone going from X to Y will post that they’re going by this mode at this time. If used by all students we all will soon get relief from asking and saying “The money is to be paid by only me, it would’ve been better if someone was travelling with me”. How users will contact the post maker needs to be thought of, I was thinking of App Notifications when someone requests to join you, or we can use Emails/Mobile No. (simple). The Facility of the search will be provided so that people can come and search for others who are travelling on their path, what will they search how they will see the results again needs to be thought of but nonetheless is the task of a single meet.",
      mentor: "Anadi Sharma",
      tech: "Flutter, Firebase/MongoDB",
    },
    {
      id: 2,
      title: "Fest Bot",
      tagline: "Elevate fest experience: AI FAQs, event alerts, admin updates",
      description:
        "A smart WhatsApp bot tailored for college festivals is equipped with AI-driven FAQ responses and personalized event notifications. This multifaceted system incorporates an intelligent backend for administrators to send updates seamlessly and allows for customizable messages based on the recipient's phone number.",
      mentor: "Jaimin Gajjar",
      tech: "Node.js, LLMs, LangChain",
    },
    {
      id: 3,
      title: "FTP Server",
      tagline: "Peer-to-peer file-sharing solution",
      description:
        "FTP Server, a cool project to make file sharing a breeze on your institute's intranet. Effortlessly sending files between devices connected to the same Wi-Fi, without the hassle of network logins. It's a smart, secure, and user-friendly system. Basically, it is a peer-to-peer file-sharing solution.",
      mentor: "Yuvraj Rathva",
      tech: "Golang, FTP",
    },
    {
      id: 4,
      title: "Deployment Bot",
      tagline: "Automate cloud server setup with our GitHub bot—no SSH hassle",
      description:
        "To deploy a server on cloud providers such as AWS, GCP, Azure, and others, the typical process involves doing SSH into the VM instance and following a specific set of steps. These steps are necessary to ensure the successful deployment of the server onto the instance. We're planning to develop a GitHub bot that can clone a repository and create containers in a virtual machine. The bot will manage the number of containers based on traffic, eliminating the need to SSH into the VM for deployment.",
      mentor: "Rohit Kori",
      tech: "NodeJs, Docker, SSH",
    },
    {
      id: 5,
      title: "DevlUp website revamp",
      tagline: "Elevate DevlUp's website",
      description:
        "DevlUp Labs seeks to enhance its website by transitioning from Vue to React, integrating the new code with the existing backend. This initiative aims to boost the website's performance, scalability, and maintainability. Concurrently, we plan to elevate the user experience by introducing new features and refining the UI.",
      mentor: "Piyush Jhamnani",
      tech: "React JS",
    },
    {
      id: 5,
      title: "DevlUp website revamp",
      tagline: "Elevate DevlUp's website",
      description:
        "DevlUp Labs seeks to enhance its website by transitioning from Vue to React, integrating the new code with the existing backend. This initiative aims to boost the website's performance, scalability, and maintainability. Concurrently, we plan to elevate the user experience by introducing new features and refining the UI.",
      mentor: "Piyush Jhamnani",
      tech: "React JS",
    },
    {
      id: 6,
      title: "WOC website revamp",
      tagline: "Enhance WOC website",
      description:
        "Improve the WOC website by replacing the existing code written in Vue with React. This will involve integrating the React code with the website's existing backend. The goal of this project is to improve the website's performance, scalability, and maintainability.",
      mentor: "Piyush Jhamnani",
      tech: "React JS",
    },
    {
      id: 7,
      title: "SSH with Email",
      tagline: "Simplified VM Access",
      description:
        "Secure Shell (SSH) is a way to establish a secure bi-directional persistent connection between a client machine and a remote machine (typically a server or a VM). A secure and user-friendly system that eliminates the need for traditional SSH keys to access remote virtual machines (VMs). This innovative solution enables users to authenticate themselves using their email and password, providing a seamless and accessible method for VM access.",
      mentor: "Saahil Bhavsar",
      tech: "Go, Bash",
    },
    {
      id: 8,
      title: "TRS archive website backend",
      tagline:
        "Website for robotics activities in India under the banner of TRS",
      description:
        "Development of https://arxiv.org/ like website for robotics activities in India under the banner of The Robotics Society (TRS) The website should be able to accept submission like - Preprints of research papers - Reports on Technology Development by R&D labs/ Industry/Academia - Reports on Products Developed by Start-ups/MSMEs There will be an - editorial team who will moderate the articles. - comments or reviews posted by anyone - if the author agrees to peer review, editors will initiate a peer review process with the reviewer's name and review visible on the website after some days. All the approved articles can be posted online, accessible to all.",
      mentor: "Govind Mali",
      tech: "Django",
    },
  ];
  console.log(accounts);
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
              {accounts.map((x: project) => {
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
                      <div className="mx-2 text-[14px] mb-4">{x.tagline}</div>
                      <div className="mx-2 scroll-m-12 md4">
                        <h5 className="font-semibold py-1">Mentors</h5>
                        <ul className="py-1 mx-2">
                          <li>
                            {"\u2022"} {x.mentor}
                          </li>
                        </ul>
                        <h5 className="font-semibold py-1 pb-5">
                          Technologies
                        </h5>
                        <span className="rounded-full px-4 py-2 bg-gray-300">
                          {x.tech}
                        </span>
                        <h5 className="font-semibold py-1 pt-5">Description</h5>
                        <div>{x.description}</div>
                        <div className="spacer py-5"></div>
                        <hr></hr>
                        <div className="spacer py-5"></div>
                      </div>
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

