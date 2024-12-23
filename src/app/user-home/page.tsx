"use client";

import React from 'react';
import Sidebar from './components/Sidebar';
import JobList from './components/JobList';
import { TbDoorExit } from "react-icons/tb";
import "./styles/page.css"
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <header className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div id="logo" className="text-2xl font-bold">IndieTestHub</div>
        <div className="flex gap-4 items-center">
          <Link href="/">  
            <button className="text-gray-700 px-6 py-2 hover:text-gray-400">
              <TbDoorExit size={30} />
            </button>
          </Link>  
        </div>
      </header>
      <main className="user-home-content">
        <Sidebar />
        <JobList />
      </main>
    </div>
  );
};

export default Home;
