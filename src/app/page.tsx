import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">IndieTestHub</div>
        
        {/* Navigation */}
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-white px-6 py-2 rounded-md gradient-text-hover">Testers</a>
          <a href="#" className="text-white px-6 py-2 rounded-md gradient-text-hover">Projects</a>
          <a href="#" className="text-white px-6 py-2 rounded-md gradient-text-hover">Company</a>
        </nav>
        
        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <button className="text-white px-6 py-2 rounded-md gradient-text-hover">Login</button>
          <button className="text-black font-bold px-6 py-2 rounded-md bg-white gradient-text-hover btn-cyberpunk">
            <span className="relative z-10">Sign up</span>
          </button>
        </div>
      </header>

      {/* Main Content Placeholder */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-72px)] text-center">
        <h1 className="text-5xl font-bold mb-4">Hi</h1>
      </main>
    </div>
  );
}
