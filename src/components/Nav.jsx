import React from "react";
import { BsSearch } from "react-icons/bs";

import { Logo, profile, iconsList } from "../data";

const Nav = () => {
  return (
    <div className="border-b">
      <div className="sm:w-full md:w-[60rem] lg:w-[60rem] mx-auto">
        <nav className="flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row h-40 md:h-16 lg:h-16 py-4 items-center">
          <div className="logo">
            <img src={Logo} className="w-[103px] h-[29px]" alt="" />
          </div>
          <div className="search">
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <BsSearch />
              </span>
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </label>
          </div>

          <ul className="flex items-center space-x-5 text-xl">
            {iconsList.map((item, index) => (
              <li key={index}>
                <a href="" className={`text-[#262626] ${item.hover}`}>
                  {item.icons}
                </a>
              </li>
            ))}
            <img
              className="w-[25px] h-[25px] rounded-full object-cover cursor-pointer"
              src={profile}
              alt="Profile"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
