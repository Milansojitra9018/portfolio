"use client";
import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from 'next/navigation';

const navbarValue = ["Home", "Education", "Services", "Project", "Contact"];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if pathname matches any navbar item and set active item accordingly
    const currentItem = navbarValue.find(item => pathname.includes(item.toLowerCase()));
    if (currentItem) {
      setActiveItem(currentItem);
    }
  }, [pathname]);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setDarkMode(savedMode === "dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSetActive = (item) => {
    setActiveItem(item);
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id ${item.toLowerCase()} not found.`);
    }
  };
  

  return (
    <div className="text-[#000000] dark:text-dark-textgray">
      <div className="flex mt-6 px-6">
        <div className="flex items-center justify-between w-full">
          <div className="hidden md:flex gap-16 pl-[20%]">
            {navbarValue.map((item) => (
              <div
                key={item}
                className={`cursor-pointer ${
                  activeItem === item
                    ? 'underline underline-offset-8 decoration-2 decoration-secondary dark:decoration-dark-secondary'
                    : ''
                }`}
                onClick={() => handleSetActive(item)}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-[#000000] dark:text-[#ffffff]" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-[#000000] dark:text-[#ffffff]" />
              )}
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white border dark:border-white border-textgray dark:bg-[#3b3a3a] p-1 ml-6 rounded-full shadow-lg transition-colors"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-8 text-[#ffff06]" />
            ) : (
              <MoonIcon className="h-5 w-8 text-[#5a92c0]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navbar Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4 md:hidden bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          {navbarValue.map((item) => (
            <div
              key={item}
              className={`cursor-pointer ${
                activeItem === item
                  ? 'underline underline-offset-8 decoration-2 decoration-secondary dark:decoration-dark-secondary'
                  : ''
              }`}
              onClick={() => handleSetActive(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
