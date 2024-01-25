import React, { useState} from 'react';
import { IoMdHelpCircle } from 'react-icons/io';
import { IoPeopleSharp, IoCodeSlash } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { RxCalendar, RxHamburgerMenu, RxHome } from 'react-icons/rx';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

const Sidebar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 w-auto bg-white border-black shadow-slate-700 shadow-md mt-16 opacity-95 v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--is-mobile theme--light transition-transform duration-300 ease-in-out transform ${
        isSidebarOpen ? 'translate-x-0' : 'md:translate-x-full'
      }`}
      data-booted={true}
    >
  <div className="py-4 pl-4 pr-8 w-300 grid gap-2" style={{ fontFamily: 'Verdana, Geneva, Tahoma, sans-serif' }}>
    <a href="/" className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
      <i className="fa fa-home mr-2"><RxHome className="h-6 w-6 text-gray-700 stroke-1"/></i> Home
    </a>
    <a href="/" className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
      <i className="fa fa-calendar mr-2"><RxCalendar className="h-6 w-6 text-gray-700 stroke-1" /></i> How It Works
    </a>
    <a href="/mentors" className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
      <i className="material-icons mr-2"><IoPeopleSharp className="h-6 w-6 text-gray-700 stroke-1"/></i> Mentors
    </a>
    <a href="/projects" className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
      <i className="fa fa-code mr-2"><IoCodeSlash className="h-6 w-6 text-gray-700 stroke-1"/></i> Projects
    </a>
    <a href="/" className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
      <i className="fa fa-tachometer mr-2"><MdDashboard className="h-6 w-6 text-gray-700 stroke-1" /></i> Dashboard
    </a>
    <a href="/" className="py-2 px-4 text-primary-dark border-l-4 border-primary-dark flex align-middle gap-2">
      <i className="material-icons mr-2"><IoMdHelpCircle className="h-6 w-6 text-gray-700 stroke-1" /></i> Help
    </a>
  </div>
  <div className="border-t border-gray-200"></div>
</aside>
  );
};


  return (
    <div>
      <div className="flex items-center justify-between h-[64px] shadow-slate-700 shadow-md" style={{ backgroundColor: '#1976d2' }}>
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
      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}
    </div>
  );
};

export default Navbar;
