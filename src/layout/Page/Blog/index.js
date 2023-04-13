import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Adminlayout from "../../AdminDashboard";
import Addblog from "../../AdminDashboard/component/addBlog";

const AdminBlog = () => {
  const [getValue, setGetValue] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sendData"));
    if (data) {
      setGetValue(data);
    }
  }, []);

  return (
    <Adminlayout>
      <div className="h-[480px] gap-4 mx-5 my-5 overflow-y-auto overflow-hidden">
        <h1 className="px-5 py-5 text-3xl font-bold text-center">Order</h1>
        {getValue.map((item) => (
          <div className="flex justify-between mx-4 my-4">
             <div>
             <img
                src={item.img}
                className="w-[200px] h-[100px] border-8 border-solid border-[#DED5D0]"
              />
            <h1 className="text-[24px] font-bold px-2 py-1 text-black" key={item.id}>{item.name}</h1>
            <p className="text-black px-2" key={item.id}>{item.descrption}</p>
            <p className="text-black px-2" key={item.id}>Rs : {item.Price}</p>
             </div>
            <div>
              <button className="bg-green-900 px-8 py-2 mt-4 text-white">Accept</button><br></br>
              <button className="bg-red-900 px-[34px] my-4 py-2 text-white">Reject</button>
            </div>
          </div>
          
        ))}
      </div>
      
    </Adminlayout>
  );
};

export default AdminBlog;
