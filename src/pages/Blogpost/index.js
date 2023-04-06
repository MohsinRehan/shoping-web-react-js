import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import PageLayout from "../../layout";

export default function Blogpost() {
  const { id } = useParams();
  const storeData = JSON.parse(localStorage.getItem("addProduct"));
  const [productData] = useState(storeData);
  console.log("item", productData);
  const productItem = productData.find((item, i) => item.id === +id);
  const [isSelected, setIsSelected] = useState(false);

  const handleAddToCart = () => {
    setIsSelected(true);
    
  };

  useEffect(()=>{
    handleAddToCart();
  },[])

  const addMore = () => {};

  let navigate = useNavigate();

  const toCheck = () => {
    const emptyData = JSON.parse(localStorage.getItem('sendData')) || [];
    emptyData.push(productItem);
    localStorage.setItem("sendData", JSON.stringify(emptyData));
    navigate("/Shoping");
  };

 
  return (
    <PageLayout>
      <div className="container flex my-20 mx-10">
        <div className="w-[70%]">
          <img
            src={productItem.img}
            className="w-full my-4 border-[30px] border-[#DED5D0] border-solid"
          />
        </div>
        <div className="ml-6 w-[28%]">
          <h1 className="text-[42px] py-1 font-serif font-bold">
            {productItem.name}
          </h1>
          <p className="pb-4 pl-1">{productItem.descrption}</p>
          <p>{productItem.Price}</p>
          {!isSelected ? (
            <button
              onClick={handleAddToCart}
              className="w-[90%] bg-[#333333] px-5 py-3 text-white my-4"
            >
              Add to Cart
            </button>
          ) : null}
          {isSelected ? (
          <div>
            <button
            onClick={addMore}
            className="w-[90%] bg-[#fff] px-5 py-3 text-black m4-2 border-[1px] border-[#DED5D0] border-solid"
          >
            Add More
          </button>
          <br />
          
            <button
              onClick={toCheck}
              className="w-[90%] bg-[#333333] px-5 py-3 text-white my-4"
            >
              Go to Checkout
            </button>
          </div>
          ) : null}
        </div>
      </div>
    </PageLayout>
  );
}
