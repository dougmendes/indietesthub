"use client";

import React, { useState } from "react";
import "../styles/sidebar.css";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sidebar-bg">
      <div className="profile-section">
        <div className="profile-picture">
          <Image
            src="/icon2.jpg"
            width={500}
            height={500}
            alt="Icon"
            className="profile-image"
          />
        </div>
        <h2>Douglas Mendes</h2>
        <p>Computer Engineer</p>
        <button>Complete your profile</button>
      </div>
      <div className="project-section">
        <div className="flex justify-between items-center" onClick={toggleDropdown}>
          <span>Projects: 15</span>
          <span
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <MdKeyboardArrowDown size={30} />
          </span>
        </div>
        {isOpen && (
          <div className="project-dropdown">
            <a href="#">My Projects</a>
            <span>|</span>
            <a href="#">Find a Project</a>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
