import { NAV_LINKS } from "../../Constants/constants";
import { useState } from "react";
import type { NavLink } from "../../types/index";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navLinks, setNavLinks] = useState<NavLink[]>(NAV_LINKS);

  const handleNavClick = (clickedIndex: number) => {
    setNavLinks((prev) =>
      prev.map((link, index) => ({
        ...link,
        current: index === clickedIndex,
      }))
    );
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-purple-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">Netscan</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    link.current
                      ? "bg-blue-700 text-white shadow-inner"
                      : "text-blue-100 hover:bg-blue-800 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
                New Scan
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800 rounded-lg m-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                handleNavClick(index);
                setIsMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                link.current ? "bg-blue-700 text-white" : "text-blue-200 hover:bg-blue-700 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-md text-base font-medium shadow-md">
              New Scan
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
