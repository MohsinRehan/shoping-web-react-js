import React from "react";
import { IoIosArrowForward } from "react-icons/io";

 const Admincard = ({data , title ,icon}) => {
  return (
    <>
      <div className="bg-white shadow  w-80 h-28 mt-6 ml-10 flex-wrap rounded  flex justify-between items-center relative">
        <div className="text-white rounded text-[20px] p-2 bg-[#000] absolute left-4 top-10">
          {icon}
        </div>
        <div className="ml-20 mt-1">
          <h1 className="text-black">{data}</h1>
          <p className="text-black">{title}</p>
        </div>
        <div className="text-black pr-5 q">
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
};

export default Admincard;