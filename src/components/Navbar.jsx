import { useState, useEffect } from "react";
import {
  Menu,
  X,
  House,
  Newspaper,
  School,
  Book,
  Camera,
  Phone,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = () => setIsOpen(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#", icon: House },
    { name: "News", href: "#news", icon: Newspaper },
    { name: "Profile", href: "#profile", icon: School },
    { name: "Information", href: "#info", icon: Book },
    { name: "Galery", href: "#galery", icon: Camera },
    { name: "Contact", href: "#contact", icon: Phone },
  ];
  const renderLinks = navLinks.map((link) => {
    const Icon = link.icon;
    return (
      <li key={link.name} className="w-full md:w-auto">
        <a
          href={link.href}
          className="text-slate-200 hover:text-white flex flex-row gap-4"
          onClick={closeSidebar}
        >
          <Icon size={22} className="md:hidden" />
          <p>{link.name}</p>
        </a>
      </li>
    );
  });
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-full mx-auto">
          <div
            className={`flex items-center justify-between px-4 py-4 md:px-10 md:py-2 text-white transition-all duration-600 ${isScrolled ? "bg-[#002448]" : "bg-transparent"}`}
          >
            {/* logo */}
            <a href="/" className="flex items-center group">
              <img
                src="/spenda.png"
                alt=""
                className="w-16 h-16 md:w-24 md:h-24"
              />
              <div className="flex flex-col items-left justify-center">
                <h1 className="text-lg md:text-xl font-bold uppercase text-slate-200">
                  smp n 2 tegal
                </h1>
              </div>
            </a>

            {/* hamburger menu */}
            <div
              className="md:hidden flex items-center justify-center p-3 hover:scale-95 transition-transform"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={28} />
            </div>

            {/* desktop menu */}
            <ul className="hidden md:flex items-center gap-4 md:text-xl md:font-bold">
              {renderLinks}
            </ul>
          </div>
        </div>
      </nav>

      {/* overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 animate-fade-in backdrop-blur-sm"
        ></div>
      )}

      {/* sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-[#002448] border-l-2 border-[#06386A] transition-transform duration-300 z-50 px-5 py-5 text-white ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b-2 border-slate-200">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-200">
            Menu
          </h1>

          <div
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center p-3 hover:scale-95 transition-transform"
          >
            <X size={28} />
          </div>
        </div>
        <ul className="flex flex-col p-6 gap-8 items-left font-bold text-xl">
          {renderLinks}
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
