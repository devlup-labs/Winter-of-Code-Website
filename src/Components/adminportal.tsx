import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useRecoilState } from 'recoil';
import { togglestate } from '../store/toggle';
import { Fragment } from 'react'
import { Link } from "react-router-dom";
import { FaCircle } from 'react-icons/fa';

import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'



function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

const AdminPortal: React.FC = () => {
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
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hi Name!</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Manage all of the Winter of Code Program here.
        </p>
      </div>
      <br></br>
      <br></br>
      <div className="lg:flex lg:items-center lg:justify-between mx-4">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-semibold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
          Admin Name
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Scrummaster
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Devlup Labs
          </div>
          
        
        </div>
      </div>
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        <span className="hidden sm:block">
        <Link to={"/profile"}>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            Edit Profile
          </button>
          </Link>
        </span>

        <span className="ml-3 hidden sm:block">
        <Link to={"/scrumprojects"}>
        <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <LinkIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
            View Projects Under You
          </button>
          </Link>
        </span>

        
      </div>
    </div>
    <br>
    </br>
    <br>
    </br>
    
        <div className="center-container">
      <div className=" flex justify-center">
        <br></br>
      <br></br>
     
      <div className="lg:flex lg:items-center lg:justify-between mx-4">
      <div className="min-w-0 flex-1">
      <hr></hr>
        <hr></hr>
        <br></br>
        <div className='flex justify-center'>
            
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Current Programs</h3></div>
      <br></br>
        <hr></hr>
        <hr></hr>
        
       
        <br></br>
        <div className=" flex justify-center">
        <h2 className="text-2xl font-semibold leading-7 text-gray-900 sm:truncate sm:text-xxl sm:tracking-tight">
          Winter of Code 2024
        </h2>
        </div>
        
        <div className="mt-1 flex flex-col justify-center sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
        
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            XX Jan 24- YY Feb 24
          </div>
          
          </div>

          <div className="mt-2 flex justify-center items-center text-sm text-gray-500">
            <FaCircle className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Active
          </div>
          <br></br>
          <div className='flex justify-center'>
          <span className="hidden sm:block mx-4">
        <Link to={""}>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <span className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true">+</span>
        Add Projects
          </button>
          </Link>
        </span>
        <span className="hidden sm:block mx-4">
        <Link to={""}>
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PencilIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
        Update Projects
          </button>
          </Link>
        </span>
        
        </div>
        
    </div>  
        
        </div>
      </div>
      </div>
      </div>
        </div>
        </div>
    );
};
export default AdminPortal;