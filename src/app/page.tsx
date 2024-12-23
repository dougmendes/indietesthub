"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ["Gamers", "Testers", "Explorers", "Bug Hunters"," Innovators", "Builders"];
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return prev.slice(0, prev.length - 1);
        } else {
          return word.slice(0, prev.length + 1);
        }
      });

      // Se a palavra estiver totalmente escrita, começa a deletar
      if (!isDeleting && displayedText === word) {
        setTimeout(() => setIsDeleting(true), 1000); // Espera antes de apagar
      }

      // Se a palavra estiver apagada completamente, passa para a próxima
      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex]);
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div id="logo" className="text-2xl font-bold">IndieTestHub</div>
        
        {/* Navigation */}
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-white px-6 py-2 rounded-md gradient-text-hover">Testers</a>
          <a href="#" className="text-white px-6 py-2 rounded-md gradient-text-hover">Projects</a>
          <a href="#" className="text-white px-6 py-2 rounded-md gradient-text-hover">Company</a>
        </nav>
        
        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <Link
            href="/signin"
          >
            <button id="btn-login" className="text-white px-6 py-2 rounded-md gradient-text-hover">Login</button>
          </Link>
          <Link href="/signup"
          >
            <button className=" px-6 py-2 rounded-md bg-white gradient-text-hover btn-cyberpunk">Sign up</button>
          </Link>
        </div>
      </header>

      {/* Main Content Placeholder */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] text-center">
        <h1 className="text-8xl font-bold mb-10">
          We are {" "}
          <span className="gradient-text">
            {displayedText}
            <span className="animate-blink gradient-text">|</span> {/* Cursor piscando */}
          </span>
        </h1>
        <div className="text-white">
          From Gamers to Gamers, test your projects with people who are passionate about video games
        </div>
      </main>
    </div>
  );
}
