import React from "react";
import { useState } from "react";
import Card from "../../components/Card";
import Header from "./components/Header";
import Button from "../../components/Button";
import Imagecontent from "./components/Imagecontent";
import * as FOOD_DATA from "./data/index.json";
import * as IMAGE_DATA from "./data/gallery.json";
import Gallery from "./components/Gallery";
import PageLayout from "../../layout";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [data] = useState({ ...FOOD_DATA }.data);
  const [arrimage] = useState({ ...IMAGE_DATA }.image_data);
  const { t } = useTranslation();
  return (
    <PageLayout>
      <Header />
      <div className="grid grid-cols-2 max-md:grid-cols-1 ml-20 mt-[150px] ">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Button center>More Articles</Button>
      <Imagecontent />
      <div className="text-center font-bold text-[44px]">
        <h1>{t("follow-instagram")}</h1>
      </div>
      <div className="grid grid-cols-4 gap-6 mx-20 my-20">
        {arrimage.map((item) => {
          return <Gallery key={item.id} image={item.image} />;
        })}
      </div>
    </PageLayout>
  );
};

export default Home;
