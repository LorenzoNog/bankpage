import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navlinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" w-full  flex items-center  justify-between">
      <div>
        <img className="w-[124px] h-[32px]" src={logo} />
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navlinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`text-[#d8d8e4] ${
                index === navlinks.length ? "mr-0" : "mr-10"
              }`}
            >
              <a
                href={`#${nav.id}`}
                className="font-semibold cursor-pointer text-[16px] hover:text-white"
              >
                {nav.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={`${toggle ? close : menu}`}
          className="w-[30px] h-[25px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-2 my-1 min-w-[140px] rounded-md  mt-2 mr-6`}
        >
          <ul className="list-none flex justify-start items-start flex-1 flex-col">
            {navlinks.map((nav, index) => {
              return (
                <li
                  key={nav.id}
                  className={`text-[#d8d8e4] ${
                    index === navlinks.length ? "mr-0" : "mb-5"
                  }`}
                >
                  <a
                    href={`#${nav.id}`}
                    className="font-semibold cursor-pointer text-[16px]"
                  >
                    {nav.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
