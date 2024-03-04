import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { togglestate } from '../store/toggle';

interface ProjectCardProps {
  mentor: string;
  contributors: string;
  projectName: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ mentor, contributors, projectName }) => {
  return (
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900">{projectName}</h5>
        <span className="text-sm text-gray-500 text-center">Mentor: {mentor} <br></br>Contributors: {contributors}</span>
        <div className="flex mt-4 md:mt-6">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Details</a>
            <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Progress</a>
        </div>
    </div>
  )
}

const Scrummaster: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [toggle, setToggle] = useRecoilState(togglestate);

  return (
      <div
        className={`overflow-x-hidden ${toggle === null ? "" : toggle ? "contract" : "expand"}`}>
            <div
          className=" flex justify-center md2:h-[180px] h-[120px] w-screen md2:absolute md2:top-0 md2:left-0 z-1 "
          style={{ backgroundColor: "#1976d2" }}>
        </div>
        <div className=" md2:my-[120px] bg-white md2:w-[808px] shadow-custom md2:absolute md2:top-0 md2:right-1/2 md2:transform md2:translate-x-1/2 z-0">
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hi Scrum Master!</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Your projects, contributors and their mentors, all in one place.
        </p>
      </div>
    <br></br>
    <br></br>
        
<div className='flex'>
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <div className="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5" type="button">
            <span className="sr-only">Open dropdown</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
            <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Export Data</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <ProjectCard 
    mentor="Piyush" 
    contributors="Ishan, Rahul" 
    projectName="WOC Website Revamp" />
</div>
</div>

</div>
        </div>
        </div>
       
    );
};
export default Scrummaster;