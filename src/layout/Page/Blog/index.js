import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Adminlayout from "../../AdminDashboard";
import Addblog from "../../AdminDashboard/component/addBlog";

const AdminBlog = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState([]);
  return (
    <Adminlayout className="flex">
      <div className="h-96 gap-4 mx-5 my-5 overflow-y-scroll scroll-hidden">
        <h1 className="px-5 py-5 text-[30px] font-bold text-center">Blog</h1>
        {formData &&
          formData.map((item, i) => (
            <div
              key={"custom-key-" + i}
              className="w-[300px] h-[300px]   shadow text-white"
            >
              <img
                src={URL.createObjectURL(item && item.img)}
                className="w-[300px] h-[200px]"
                alt=""
              />
              <h1 className="text-[24px] font-bold px-2 py-2 text-black">
                {item && item.name}
              </h1>
              <p className="text-black px-2">{item && item.descrption}</p>
              <p className="text-black px-2">Rs : {item && item.price}</p>
            </div>
          ))}
      </div>
      <div className="absolute  bottom-10 right-20">
        <button
          onClick={() => setShowPopup(true)}
          className="w-40 px-2 py-4 rounded bg-blue-700 text-white flex justify-around items-center"
        >
          Add Blog
          <BsFillPlusCircleFill />
        </button>
        {showPopup && (
          <Addblog
            toggleForm={() => setShowPopup(false)}
            setFormData={setFormData}
            lable="price"
            inputType="number"
          />
        )}
      </div>
    </Adminlayout>
  );
};

export default AdminBlog;
