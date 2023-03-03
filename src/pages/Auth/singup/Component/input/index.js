import React from "react";

export const SingInput = () => {
  return (
    <div className="w-[50%] mx-auto">
      <div className="flex ">
        <div>
          <label className="text-[16px] text-[#0d0c22] font-bold">Name</label>
          <br />
          <input
            type="text"
            className="bg-[#F1F1F1] rounded w-[100%] py-2 mt-2 px-4 mb-6 outline-none"
          />
        </div>
        <div className="ml-4">
          <label className="text-[16px] text-[#0d0c22] font-bold">
            {" "}
            Username
          </label>
          <br />
          <input
            type="text"
            className="bg-[#F1F1F1] w-[100%] rounded py-2 mt-2 px-4 mb-6 outline-none"
          />
        </div>
      </div>
      <div>
        <label className="text-[16px] text-[#0d0c22] font-bold">Email</label>
        <input
          type="email"
          className="bg-[#F1F1F1] w-[100%] rounded py-2 mt-2 px-4 mb-6 outline-none"
        />
      </div>
      <div>
        <label className="text-[16px] text-[#0d0c22] font-bold">Password</label>
        <input
          type="password"
          className="bg-[#F1F1F1] w-[100%] rounded py-2 mt-2 px-4 mb-6 outline-none"
        />
      </div>
    </div>
  );
};
