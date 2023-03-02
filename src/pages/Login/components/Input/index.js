import React from "react";

const Input = () => {
  return (
    <div className="w-[50%] mx-auto">
      <label className="text-[16px] text-[#0d0c22] font-bold">
        Username or Email Address
      </label>
      <br />
      <input
        type="text"
        className="bg-[#F1F1F1] rounded w-[100%] py-2 mt-2 px-4 mb-6 outline-none"
      />
      <div className="flex justify-between">
        <label className="text-[16px] text-[#0d0c22] font-bold">Password</label>
        <span className="text-[15px] text-blue-700">
          <a href="#">Forgot password?</a>
        </span>
      </div>
      <input
        type="password"
        className="bg-[#F1F1F1] w-[100%] rounded py-2 mt-2 px-4 mb-6 outline-none"
      />
    </div>
  );
};

export default Input;
