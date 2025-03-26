import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, 
  faTimes, 
  faIgloo, 
  faListCheck, 
  faChartLine, 
  faCalendarDays, 
  faGear, 
  faUser 
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button 
        className="fixed top-4 left-4 z-50 text-white text-2xl bg-gray-800 p-2 rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-[#06141BCC] backdrop-blur-md text-white shadow-lg transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex flex-col items-center border-b border-gray-700 p-5">
          {/* Close Button */}
          <button 
            className="self-end text-xl text-white mb-3"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          {/* App Title (Moved Below Close Button) */}
          <span className="text-xl font-bold mt-2">My Task Manager</span>
        </div>

        {/* Sidebar Menu */}
        <ul className="flex flex-col space-y-4 p-5">
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-all">
            <FontAwesomeIcon icon={faIgloo} />
            Home
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-all">
            <FontAwesomeIcon icon={faChartLine} />
            Dashboard
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-all">
            <FontAwesomeIcon icon={faListCheck} />
            Your Tasks
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-all">
            <FontAwesomeIcon icon={faCalendarDays} />
            Calendar
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-all">
            <FontAwesomeIcon icon={faGear} />
            Settings
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:text-gray-300 transition-all">
            <FontAwesomeIcon icon={faUser} />
            Profile
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
