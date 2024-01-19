import React from "react";
import { NavLink } from "react-router-dom";
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = (props) => {
  return (
    <nav className="flex px-4 border-b shadow-lg items-center relative">
      <div className="text-lg font-bold py-4">LOGO</div>
      <ul className="px-2 ml-auto flex space-x-2 relative top-full left-0 right-0">
        <NavLink to={"/"}>
          <li>
            <p className="flex p-4 items-center hover:bg-gray-50">
              <span>Home</span>
            </p>
          </li>
        </NavLink>

        <NavLink to={"/Notes"}>
          <li>
            <p className="flex p-4 items-center hover:bg-gray-50">
              <span>Notes</span>
            </p>
          </li>
        </NavLink>
        <NavLink to={"/about"}>
          <li>
            <p className="flex p-4 items-center hover:bg-gray-50">
              <span>About</span>
            </p>
          </li>
        </NavLink>
        <NavLink to={"/contact"}>
          <li>
            <p className="flex p-4 items-center hover:bg-gray-50">
              <span>Contact US</span>
            </p>
          </li>
        </NavLink>
      </ul>
      <div className="ml-auto hidden text-gray-500 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </div>
    </nav>
  );
};
