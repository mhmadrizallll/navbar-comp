import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLinks } from "../data";
import { Link, useLocation } from "react-router";
import ResponsiveMenu from "./ResponsiveMenu";
import InputSearch from "./InputSearch";

const NavbarComponent = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [result, setResult] = React.useState("");
  return (
    <>
      <nav className="container mx-auto">
        <div className="flex items-center justify-between p-5">
          {/* Logo */}
          <div className="flex items-center gap-3 p-3">
            <div className="flex flex-col justify-center items-center">
              <FiBookOpen className="text-3xl text-third" />
              <p className="font-primary font-bold bg-linear-45/oklch from-first via-second to-third text-transparent bg-clip-text">
                Library
              </p>
            </div>
            <p className="text-3xl font-bold bg-linear-45/oklch from-first via-second to-third text-transparent bg-clip-text">
              OoppsS
            </p>
          </div>
          {/* Navlink */}
          <div className="hidden md:block">
            <ul className="flex gap-6 items-center text-gray-600">
              {NavLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className={`relative font-medium inline-block px-3 py-1
                hover:bg-linear-45/oklch hover:from-first hover:via-second hover:to-third hover:text-transparent hover:bg-clip-text
                after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                after:w-0 after:h-[2px] after:bg-second after:transition-all after:duration-300 
                hover:after:w-6 hover:after:left-[calc(50%-12px)]
                ${location.pathname === link.path ? "text-second" : ""}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Button, Search, Cart */}
          <div className="flex items-center gap-5">
            <div className="flex gap-2 sm:gap-5">
              <Link to="/cart">
                <FaShoppingCart className="text-xl hover:text-secondary" />
              </Link>
              <button onClick={() => setOpenSearch(!openSearch)}>
                <FiSearch className="text-xl hover:text-secondary" />
              </button>
            </div>
            <button className="bg-transparent border-2 border-second text-second px-5 py-1 rounded-xl hidden md:block hover:bg-second hover:text-white transition-all duration-300 ease-in-out">
              Login
            </button>
          </div>
          {/* Humburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              <span
                className={`absolute transition-transform duration-300 ${
                  open ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <RxHamburgerMenu className="text-3xl" />
              </span>
              <span
                className={`absolute transition-transform duration-300 ${
                  open ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
                }`}
              >
                <RxCross2 className="text-3xl" />
              </span>
            </button>
          </div>
        </div>
      </nav>
      <InputSearch openSearch={openSearch} setResult={setResult} />
      {/* Responsive menu */}
      <ResponsiveMenu open={open} />

      <div className="container mx-auto pt-10">{result}</div>
    </>
  );
};

export default NavbarComponent;
