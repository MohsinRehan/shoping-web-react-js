import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

const TopHeader = () => {
  return (
    <header className="h-24 w-full flex items-center  relative  px-5 space-x-10 bg-black">
      <div className="flex items-center mt-4 w-[20%]">
        <div>
          <img
            src="/Assets/image/LogoSample.jpg"
            className="rounded-3xl w-16 h-16"
          />
        </div>
        <div className="ml-4">
          <h1 className="text-md font-medium text-white">AdminDashboard</h1>
          <h1 className="text-sm font-regular text-white">Mohsin</h1>
        </div>
      </div>
      <div className="flex justify-between w-[80%]">
        <div className="font-sans text-black  flex items-center">
          <div className=" rounded overflow-hidden flex relative">
            <span className="bg-white absolute top-[13px] left-1	">
              <CiSearch />
            </span>
            <input
              type="text"
              className="px-6 py-2 outline-none"
              placeholder="search"
            />
            <button className="flex bg-blue-400 text-white items-center justify-center px-4 border-l">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center space-x-4 text-white">
          <div className="flex items-center mr-4">
            <span className="mr-4">
              <a href="">
                <img
                  src="/Assets/image/LogoSample.jpg"
                  className="rounded-3xl w-[25px]"
                />
              </a>
            </span>
            <span className="mr-4">
              <a href="">
                <AiFillSetting />
              </a>
            </span>
            <span>
              {" "}
              <a href="#">
                <i className="fa fa-solid fa-bell"></i>
              </a>
            </span>
          </div>

          <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
