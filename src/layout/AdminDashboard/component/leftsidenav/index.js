import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBloggerB } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { MdSystemUpdateAlt } from "react-icons/md";
import { URL } from "../../../../components/Config";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  return (
    <>
      <aside className="h-[518px] w-[20%] flex flex-col  space-y-10 justify-center relative bg-black text-white">
        <div className="flex items-center ">
          <div className="h-6 w-20 flex items-center justify-center rounded-lg cursor-pointer ">
            <RxDashboard />
          </div>
          <NavLink to={URL.ADMINDASHBOARD.BASE} className="cursor-pointer">
            Dashboard
          </NavLink>
        </div>

        <div className="flex items-center ">
          <div className="h-6 w-20 flex items-center justify-center rounded-lg cursor-pointer ">
            <FaBloggerB />
          </div>
          <div>
            {" "}
            <NavLink to="/Adminblog" className="cursor-pointer">
              Blogs
            </NavLink>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="h-10 w-20 flex text-white  items-center justify-center rounded-lg cursor-pointer ">
            <FaProductHunt />
          </div>
          <div>
            <NavLink to="/Products" className="cursor-pointer">
              Products
            </NavLink>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="h-6 w-20 flex items-center justify-center rounded-lg cursor-pointer ">
            <AiFillSetting />
          </div>
          <div>
            <NavLink to="/Accountsetting" className="cursor-pointer">
              Account Settings
            </NavLink>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="h-6 w-20 flex items-center justify-center rounded-lg cursor-pointer ">
            <BiLogOut />
          </div>
          <div>
            {" "}
            <a href="" className="cursor-pointer">
              Settings
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default LeftNavbar;
