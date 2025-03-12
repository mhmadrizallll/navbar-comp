import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
// import { IoMdContact } from "react-icons/io";
import { NavLinks } from "../../data";
import { Link, useLocation } from "react-router";
import ResponsiveMenu from "./ResponsiveMenu";
import InputSearch from "./InputSearch";
import { useSearch } from "../../context/SearchContext";

// interface NavbarComponentProps {
//   setResult: (result: string) => void;
// }

const NavbarComponent = () => {
  const { setSearchQuery } = useSearch();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const [openSearch, setOpenSearch] = React.useState(false);
  // const [result, setResult] = React.useState("");
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full h-10 flex justify-end items-center bg-linear-45/oklch from-first via-second to-third text-white">
        <div className="me-10 sm:me-20 xl:me-20 ">
          <div className="flex items-center gap-10">
            <Link
              to={"/promo"}
              className="font-secondary hover:bg-white hover:text-second text-sm md:text-lg px-2 sm:px-4 py-1 rounded-full"
            >
              Promo
            </Link>
            <Link
              to={"/store"}
              className="font-secondary hover:bg-white hover:text-second text-sm md:text-lg px-2 sm:px-4 py-1 rounded-full"
            >
              My Store
            </Link>
            <Link
              to={"/contact"}
              className="font-secondary hover:bg-white hover:text-second text-sm md:text-lg px-2 sm:px-4 py-1 rounded-full"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full mt-15 bg-transparent backdrop-blur-md border-b-1">
        <div className="container mx-auto">
          <div className="flex items-center justify-between p-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
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
                  <FaShoppingCart className="text-xl hover:text-second" />
                </Link>
                <button onClick={() => setOpenSearch(!openSearch)}>
                  <FiSearch className="text-xl hover:text-second hover:cursor-pointer" />
                </button>
              </div>
              <Link to="/login">
                <button className="bg-transparent border-2 border-second text-second px-5 py-1 rounded-xl hidden md:block hover:bg-second hover:text-white transition-all duration-300 ease-in-out hover:cursor-pointer">
                  Login
                </button>
              </Link>
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
        </div>
      </nav>
      <InputSearch openSearch={openSearch} setSearchQuery={setSearchQuery} />
      {/* Responsive menu */}
      <ResponsiveMenu open={open} />

      {/* <div className="container mx-auto">{result}</div> */}
    </>
  );
};

export default NavbarComponent;
