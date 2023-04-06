import React, { useEffect, useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Adminlayout from "../../AdminDashboard";
import Addblog from "../../AdminDashboard/component/addBlog";


const Products = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState([]);
  console.log(formData);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("addProduct"));
    console.log("store value", storedData);
    if (storedData && storedData.length > 0) {
      const updatedData = storedData.map((item, index) => {
        return {
          ...item,
          id: index + 1,
        };
      });
      setFormData(updatedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("addProduct", JSON.stringify(formData));
  }, [formData]);

  return (
    <Adminlayout>
      <h1 className="px-5 py-5 text-[30px] font-bold text-center">Products</h1>
      <div className="flex flex-wrap h-72 gap-4 mx-5 my-5 overflow-auto">
        {formData &&
          formData.map((item, i) => (
            <div
              key={"custom-key-" + i}
              className="w-[300px] p-2 my-4  shadow text-white"
            >
              <p>{i}</p>
              <img src={item.img} className="w-[300px] h-[200px]" alt="" />
              <h1 className="text-[24px] font-bold px-2 py-2 text-black">
                {item && item.name}
              </h1>
              <p className="text-black px-2">{item && item.descrption}</p>
              <p className="text-black px-2">Rs : {item && item.Price}</p>
            </div>
          ))}
      </div>
      <div className="absolute  bottom-10 right-20">
        <button
          onClick={() => setShowPopup(true)}
          className="w-40 px-2 py-4 rounded bg-blue-700 text-white flex justify-around items-center"
        >
          Add Products
          <BsFillPlusCircleFill />
        </button>
        {showPopup && (
          <Addblog
            toggleForm={() => setShowPopup(false)}
            setFormData={setFormData}
            lable="Price"
            inputType="number"
          />
        )}
      </div>
    </Adminlayout>
  );
};

export default Products;
