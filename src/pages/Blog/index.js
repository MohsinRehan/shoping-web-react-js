import React from "react";
import { useState } from "react";
import Card from "../../components/Card";
import PageLayout from "../../layout";
import { useTranslation } from "react-i18next";

const Product = () => {

  const { t } = useTranslation();

  const getData = JSON.parse(localStorage.getItem("addProduct"));

  return (
    <PageLayout>
      <h1 className="text-[60px] my-20 text-center font-bold text-[#232323]">
        {t("Product")}
      </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-1 ml-8 mt-[150px] ">
        {getData.map((item, i) => {
          return <Card key={"item-card-" + i} item={item} />;
        })}
      </div>
    </PageLayout>
  );
};
export default Product;
