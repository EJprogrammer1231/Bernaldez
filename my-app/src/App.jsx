import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          
          <h1 className="text-xl">Logo</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">About</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden flex flex-col gap-4 p-4 bg-white shadow-md">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">About</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
          </nav>
        )}
      </header>

      <main className="pt-20 flex flex-col md:flex-row justify-around items-center gap-6 min-h-screen">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-white text-5xl mb-2">
            Hi, I'm Eljay Bernaldez
          </h1>
          <p className="text-white max-w-xl leading-relaxed text-lg mt-4">
              As a passionate web developer, I specialize in creating dynamic and responsive websites using React and Tailwind CSS. With a keen eye for design and a commitment to clean code, I strive to deliver exceptional user experiences. Whether it's building interactive interfaces or optimizing performance, I'm dedicated to crafting seamless digital solutions that leave a lasting impression.
          </p>
          <div className="flex flex-col md:flex-row gap-3 mt-4 items-center md:items-start">
            <button className="bg-black text-white p-2 mt-2 rounded hover:bg-gray-600">
              Message
            </button>
            <button className="bg-black text-white p-2 mt-2 rounded ">
              Download CV
            </button>
            </div>
        </div>

        <div>
          <img src="profile.jpg" className="w-100 rounded"/>
        </div>
      </main>
    </>
  );
}

export default App;