import React, { Component } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-10">
        <h1 className="text-[70px] text-center font-bold mt-20 text-[#232323] max-md:text-[50px]	">
          {t("My culinary journey ")}
          <span className="block">{t("from A to Z")}</span>
        </h1>
        <p className="text-center mt-8 text-[20px] text-[#232323] my-5">
          {t("Join me for daily reflections and delicious recipes")}
        </p>
      </div>
    </>
  );
};

export default Header;
