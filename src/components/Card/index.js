import React from "react";
import { useNavigate } from "react-router-dom";
import { URL } from "../Config";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(URL.BLOG.BLOGPOST.BASE.replace(":id", item.id))}>
      <div className="container  m-auto">
        <div className="mr-16">
          <img src={item.image} className="w-[100%]" alt="" />
          <h1 className="text-[24px] font-bold py-2">{item.title}</h1>
          <p className="py-1">{item.description}</p>
          <p>{item.createdA}</p>
          <p className="mt-1 mb-10">{item.date}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
