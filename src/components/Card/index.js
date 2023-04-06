import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../Config";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(URL.PRODUCT.PRODUCTORDER.BASE.replace(":id", item.id))}>
      <div className="container  m-auto">
        <div className="mr-16">
          <img src={item.img} className="w-[100%] h-[250px]" alt="" />
          <h1 className="text-[24px] font-bold py-2">{item.name}</h1>
          <p className="py-1">{item.descrption}</p>
          <p>{item.createdA}</p>
          <p className="mt-1 mb-10">{item.Price}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
