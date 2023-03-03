import React from "react";

const TopHeader = () => {
  return (
    <header className="h-16 w-full flex items-center relative justify-around px-5 space-x-10 bg-gray-800">
        <div className="font-sans text-black  flex items-center">
          <div className="border rounded overflow-hidden flex">
            <input type="text" className="px-4 py-2" placeholder="Search..." />
            <button className="flex items-center justify-center px-4 border-l">
              <svg
                className="h-4 w-4 text-grey-dark"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
              </svg>
            </button>
          </div>
        </div>
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
        <div className="mr-4">
           <a> <span><i class="fa fa-solid fa-bell"></i></span></a>
        </div>
        <div className="flex flex-col items-end ">
          <div className="text-md font-medium ">AdminDashboard</div>
          <div className="text-sm font-regular">Mohsin</div>
        </div>
        <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
      </div>
    </header>
  );
};

export default TopHeader;
