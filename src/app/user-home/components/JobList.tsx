"use client";

import React, { useState } from "react";
import "../styles/joblist.css";
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const JobList: React.FC = () => {
  const starProjects = [
    {
      title: "Celeste 2",
      tasksTaken: [
        { title: "Jump bug", status: "Done", description: "Jump is not working as expected" },
        { title: "Test level 3", status: "In progress", description: "Test level 3 is not working as expected" },
        { title: "Fix player collision", status: "Todo", description: "Player is not colliding with the ground" },
        { title: "Extra task 1", status: "Todo", description: "Placeholder description 1" },
        { title: "Extra task 2", status: "Done", description: "Placeholder description 2" },
        { title: "Extra task 3", status: "In progress", description: "Placeholder description 3" },
      ],
    },
    {
      title: "Blasfemous 4",
      tasksTaken: [
        { title: "Weapon bug", status: "Done", description: "Weapon is not working as expected" },
        { title: "Test bonfire travel", status: "In progress", description: "Bonfire travel is not working as expected" },
        { title: "Fix player continue option", status: "Todo", description: "Player is not continuing from the last save" },
        { title: "Extra task 4", status: "Todo", description: "Placeholder description 4" },
        { title: "Extra task 5", status: "Done", description: "Placeholder description 5" },
        { title: "Extra task 6", status: "In progress", description: "Placeholder description 6" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % starProjects.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? starProjects.length - 1 : prevIndex - 1
    );
  };

  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "done":
        return "status-done";
      case "in progress":
        return "status-in-progress";
      case "todo":
        return "status-todo";
      default:
        return "status-default";
    }
  };

  return (
    <div className="star-list">
      <h2 className="section-title">My Projects</h2>
      <a href="#" className="link-hover">See all projects</a>

      {/* Navigation Buttons */}
      <button className="nav-button prev-button" onClick={handlePrevious}>
        <MdKeyboardDoubleArrowLeft size={24} />
      </button>
      <button className="nav-button next-button" onClick={handleNext}>
        <MdOutlineKeyboardDoubleArrowRight size={24} />
      </button>

      {/* Current Project */}
      <div className="star-project">
        <h3 className="project-title">{starProjects[currentIndex].title}</h3>
        <div className="tasks-container">
          {starProjects[currentIndex].tasksTaken.slice(0, 5).map((task, taskIndex) => (
            <div key={taskIndex} className="task">
              <div className="task-header">
                <span className={`status-indicator ${getStatusClass(task.status)}`}></span>
                <p className="task-title">{task.title}</p>
              </div>
              <p className="task-description">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
