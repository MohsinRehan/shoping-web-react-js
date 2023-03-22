import React from "react";
import PageLayout from "../../layout";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <div className="flex justify-around items-center my-20">
        <img
          className="h-[630px] mx-20 w-[80%]"
          src="/Assets/image/mohsin.jpg"
          alt="book image"
        />
        <h1 className="text-center text-[47px] font-bold text-[#232323] p-20">
         {t("aboutfood")}
        </h1>
      </div>
      <div className="flex items-end mb-20 flex-col">
        <div className="w-[60%]">
          <p className="text-[18px] my-10 mr-20">
            {t("countryside")} {t("Michigan")} {t("family")} {t("cook")}
            {t("grandparent")}{t("pride")}
            {t("grandmother")}.
          </p>

          <p className="text-[18px] mb-20 mr-20">
            {t("opion")}
            {t("relationship")}. {t("best")}
            {t("bodies")}. {t("enemy")}.
          </p>
        </div>
        <img
          className="h-[430px] mx-20 w-[55%]"
          src="/Assets/image/baurger.jpeg"
          alt="book image"
        />
      </div>
    </PageLayout>
  );
}
