import React from "react";
import { useParams } from "react-router-dom";
import * as FOOD_DATA from "../Blog/data/bloggallery.json";
import { useState } from "react";
import PageLayout from "../../layout";

export default function Blogpost() {
  const { id } = useParams();
  const [blogbData] = useState({ ...FOOD_DATA }.data);
  const foodItem = blogbData.find((item) => item.id === +id);
  console.log(foodItem);
  return (
    <PageLayout>
      <div className="container mx-40  my-20">
        <h1 className="text-[42px] font-serif font-bold">{foodItem.title}</h1>
        <p>{foodItem.description}</p>
        <img src={foodItem.image} />
      </div>
    </PageLayout>
  );
}
