import React from "react";

const VerticalText = () => {
  return (
    <div className="flex items-center mx-auto py-4 w-[50%]">
      <div className="flex-grow h-px bg-gray-400"></div>
      <span className="flex-shrink text-2xl text-gray-500 px-4 italic font-light">
        Sign in with Google
      </span>
      <div className="flex-grow h-px bg-gray-400"></div>
    </div>
  );
};

export default VerticalText;
