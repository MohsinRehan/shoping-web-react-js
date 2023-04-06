import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { URL } from "../Config";
import LanguageChange from "../Lan";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const handleClicked = (e) => {
    console.log(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <nav className="w-full bg-white sticky top-0 shadow-md flex justify-between flex-wrap items-center p-4 pl-8">
      <NavLink to={URL.HOME.BASE} className="text-[30px] font-bold">
        {t("Thos")}
      </NavLink>
      <ul className="flex flex-wrap items-center	 gap-10 p-4">
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
