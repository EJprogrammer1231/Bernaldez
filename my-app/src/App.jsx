import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleMessageClick = () => {
    setShowMessageForm((prev) => !prev);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Message sent successfully.");
    setFormData({ fullName: "", email: "", phone: "" });
    setShowMessageForm(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-20 w-full border-b border-slate-700/60 bg-slate-900/95 text-slate-100 shadow-lg backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <h1 className="text-xl font-semibold tracking-wide">Bernaldez-gCode</h1>

          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#" className="transition-colors hover:text-cyan-300">
              Home
            </a>
            <a href="#" className="transition-colors hover:text-cyan-300">
              About
            </a>
            <a href="#" className="transition-colors hover:text-cyan-300">
              Contact
            </a>
          </nav>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-md border border-slate-600 p-2 text-xl leading-none transition-colors hover:bg-slate-800 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="flex flex-col gap-3 border-t border-slate-700/60 bg-slate-900 px-4 py-4 text-sm font-medium md:hidden">
            <a href="#" className="transition-colors hover:text-cyan-300">
              Home
            </a>
            <a href="#" className="transition-colors hover:text-cyan-300">
              About
            </a>
            <a href="#" className="transition-colors hover:text-cyan-300">
              Contact
            </a>
          </nav>
        )}
      </header>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 px-6 pb-10 pt-28 md:flex-row md:items-center md:justify-center md:gap-12">
        <section className="max-w-xl text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            <span className="typing-shell">
              <span className="typing-text">Hi, I&apos;m Eljay Bernaldez</span>
            </span>
          </h1>
          <p className="text-base leading-relaxed text-slate-200 md:text-lg">
            As a passionate web developer, I specialize in creating dynamic and
            responsive websites using React and Tailwind CSS. With a keen eye
            for design and a commitment to clean code, I deliver polished and
            user-focused digital experiences.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 md:flex-row md:items-center">
            <button
              type="button"
              onClick={handleMessageClick}
              className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:bg-cyan-400"
            >
              {showMessageForm ? "Close Message" : "Message"}
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-500 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-slate-800"
            >
              Download CV
            </button>
          </div>

          {showMessageForm && (
            <form
              onSubmit={handleSubmit}
              className="mt-5 grid gap-3 rounded-lg border border-slate-700 bg-slate-900/80 p-4"
            >
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white outline-none ring-cyan-300 transition focus:ring-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white outline-none ring-cyan-300 transition focus:ring-2"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-white outline-none ring-cyan-300 transition focus:ring-2"
              />
              <button
                type="submit"
                className="mt-1 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Send Message
              </button>
            </form>
          )}
        </section>

        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Eljay Bernaldez"
            className="w-72 rounded-2xl border border-slate-700 object-cover shadow-xl"
          />
        </div>
      </main>
    </>
  );
}

export default App;
