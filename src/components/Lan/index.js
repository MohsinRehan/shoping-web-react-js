import React from "react";

const LanguageChange = ({ onChange }) => {
  return (
    <div className="inline-block relative">
      <select onChange={onChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option value={"en"} selected={true}>
          English
        </option>
        <option value={"du"}>Dutch</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>
      </div>
    </div>
  );
};

export default LanguageChange;
