import React from "react";
import { useState } from "react";
import Button from "../../../components/Button";
import Adminlayout from "../../AdminDashboard";

const AccountSetting = () => {
  const [image, setImage] = useState("");
  return (
    <Adminlayout>
      <h1 className="px-5 py-5 text-[30px] text-center font-bold">
        Account Setting
      </h1>
      <div className="w-[100%] mt-10 h-[390px] overflow-hidden	 overflow-y-scroll">
        <h3 className="text-[20px] py-4 bold text-center">Update Profile</h3>
        <div className="flex items-center justify-center bg-grey-lighter">
          <label className="flex flex-col items-center px-4 py-6 text-blue  cursor-pointer">
            <input
              className="my-4 hidden "
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                className="w-28 h-28 rounded-full

            "
              />
            ) : (
              <img
                src="Assets/image/profile.png"
                className="w-28 h-28 rounded-full "
              />
            )}
            <span className="mt-4 text-base leading-normal bg-blue-600 text-white px-2 py-1">
              Update Image
            </span>
          </label>
        </div>
        <div className="flex flex-col mx-8 my-4 justify-center ">
          <label className="text-[18px] ml-2 py-2">Display Name</label>
          <input
            type="text"
            className="shadow py-2 rounded  px-4 my-2 mx-2 outline-none bg-gray-300"
          />
          <label className="text-[18px] ml-2 py-2">Email Change</label>
          <input
            type="text"
            className="shadow rounded py-2 px-4 mx-2   my-2 bg-gray-300 outline-none"
          />
          <label className="text-[18px] ml-2 py-2">Old Password</label>
          <input
            type="text"
            className="shadow rounded py-2 px-4 mx-2   my-2 bg-gray-300 outline-none"
          />
          <label className="text-[18px] ml-2 py-2">Change Password</label>
          <input
            type="Password"
            className="shadow rounded py-2 px-4 mx-2  my-2 bg-gray-300 outline-none"
          />
          <div className="flex mr-2 my-4">
            <button
              type="button"
              className="bg-blue-700 px-10 mx-4 py-3 font-bold  text-white"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-red-700 px-8 mx-4 py-3 text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Adminlayout>
  );
};
export default AccountSetting;
