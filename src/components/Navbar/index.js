import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { URL } from "../Config";
import LanguageChange from "../Lan";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleClicked = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <nav className="w-full bg-white sticky top-0 shadow-md flex justify-between flex-wrap items-center p-4 pl-8">
      <NavLink to={URL.HOME.BASE} className="text-[30px] font-bold">
        {t("Thos")}
      </NavLink>
      <div className="flex md:hidden">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            {isOpen ? (
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.41 15.41l-4.82-4.82c-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6l-4.82 4.82c-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0l3.52-3.52 3.52 3.52c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8z"
              />
            ) : (
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 6c0-.6.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1zm0 5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1zm0 5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1z"
              />
            )}
          </svg>
        </button>
      </div>
      <ul className={` flex flex-wrap items-center	 gap-10 p-4 ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:w-auto`} >
        <li>
          {" "}
          <NavLink
            to="/Product"
            className="pb-1 hover:border-b-[1px] border-black"
            style={({ isActive }) => {
              return { borderBottom: isActive ? "1px solid black" : "" };
            }}
          >
            {t("Product")}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/Shop"
            className="pb-1 hover:border-b-[1px] border-black"
            style={({ isActive }) => {
              return { borderBottom: isActive ? "1px solid black" : "" };
            }}
          >
            {t("Shop")}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/About"
            className="pb-1 hover:border-b-[1px] border-black"
            style={({ isActive }) => {
              return { borderBottom: isActive ? "1px solid black" : "" };
            }}
          >
            {t("About")}
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            to="/Contact"
            className="pb-1 hover:border-b-[1px] border-black"
            style={({ isActive }) => {
              return { borderBottom: isActive ? "1px solid black" : "" };
            }}
          >
            {t("Contact")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Shoping "
            className="pb-1 hover:border-b-[1px] border-black"
            style={({ isActive }) => {
              return { borderBottom: isActive ? "1px solid black" : "" };
            }}
          >
            <span className="text-[18px] mr-2">
              <i className="fal fa-shopping-bag"></i>
            </span>
            {t("Shopping Bag")}
          </NavLink>
        </li>
        <LanguageChange onChange={(e) => handleClicked(e)} />
      </ul>
    </nav>
  );
};

export default Navbar;
