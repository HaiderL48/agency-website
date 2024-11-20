import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { img } from "../../constants";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenu() {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  }
  return (
    <>
      {/* gradient for dark mode - bg-gradient-to-r from-gray-800 via-gray-900 to-black
      bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600
       */}
      <nav
        // style={themeStyle}
        className="fixed sm:fixed top-0 left-0 sm:w-[97%] w-[90vw]  z-50 sm:py-4 py-4 px-8 bg-dark-dark backdrop-blur-xl rounded-3xl shadow-lg mx-5 my-4 "
      >
        <div className="flex justify-between items-center align-middle">
          {/* Logo */}

          <div className="text-white text-center text-xl font-bold">
            <img src={img.logo} alt="" className="w-[60px]" />
          </div>

          <IoMdMenu
            onClick={handleMenu}
            className="sm:hidden  block text-white text-3xl"
          />
          {openMenu ? (
            <motion.div
              initial={{ opacity: 0, translateY: "-100vw" }}
              animate={{ opacity: 1, translateY: "0vw" }}
              className=" duration-400 mt-[78px] absolute bg-white  shadow-lg rounded-3xl  top-0 right-0 h-[100vw] z-[999] w-full"
            >
              <ul className="duration-400 my-8 flex flex-col justify-center items-center  text-center gap-3">
                <li>
                  <Link
                    to="/"
                    className={({ isActive }) => {
                      `${isActive ? "font-bold" : "font-normal"}
                      text-black  hover:text-gray-200 transition`;
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-black hover:text-gray-200 transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <Link
                    href="/works"
                    className={({ isActive }) => {
                      `${isActive ? "font-bold" : "font-normal"}
                      text-black  hover:text-gray-200 transition`;
                    }}
                  >
                    Works
                  </Link>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-black hover:text-gray-200 transition"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </motion.div>
          ) : (
            ""
          )}
          <ul className="hidden sm:flex sm:justify-center sm:items-center sm:space-x-6 sm:text-center">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-gray-200 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <Link href="/works" className="text-white">
                Works
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-gray-200 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
