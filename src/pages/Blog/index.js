import React from "react";
import { useState } from "react";
import Card from "../../components/Card";
import PageLayout from "../../layout";
import * as IMAGE_DATA from "../Blog/data/bloggallery.json";

const Blog = () => {
  const [blogData] = useState({ ...IMAGE_DATA }.data);

  return (
    <PageLayout>
      <h1 className="text-[60px] my-20 text-center font-bold text-[#232323]">
        Blog
      </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-1 ml-8 mt-[150px] ">
        {blogData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </PageLayout>
  );
};
export default Blog;
