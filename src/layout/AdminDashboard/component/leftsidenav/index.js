import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaBloggerB } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { URL } from "../../../../components/Config";
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

const LeftNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    return  navigate(URL.LOGIN.BASE);
  };
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
            <NavLink to={URL.ADMINBLOG.BASE} className="cursor-pointer">
              Blogs
            </NavLink>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="h-10 w-20 flex text-white  items-center justify-center rounded-lg cursor-pointer ">
            <FaProductHunt />
          </div>
          <div>
            <NavLink to={URL.PRODUCTS.BASE} className="cursor-pointer">
              Products
            </NavLink>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="h-6 w-20 flex items-center justify-center rounded-lg cursor-pointer ">
            <AiFillSetting />
          </div>
          <div>
            <NavLink to={URL.ACCOUNTSETTING.BASE} className="cursor-pointer">
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
            <button onClick={handleLogout} href="" className="cursor-pointer">
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default LeftNavbar;
