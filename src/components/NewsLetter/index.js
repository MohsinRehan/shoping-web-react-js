import React, { Component } from "react";
import Button from "../Button";
import { useTranslation } from "react-i18next";

 const NewsLetter = () => {
  const { t } = useTranslation();
    return (
      <>
        <div className="w-100 bg-[#E8E3E1] ">
          <div className="flex flex-col items-center justify-center pt-10 pb-24">
            <h1 className="text-[24px] font-bold ml-[60px] my-5">
              {t("newsletter")}
            </h1>
            <div>
              <label className="text-[18px]">{t("email")}</label>
              <br></br>
              <input
                className="px-8 mt-1 py-3 border-0 outline-0"
                type={"email"}
                placeholder={t("placeholder")}
              />
            </div>
            <div>
              <Button>
                {t("Subscribe")}
              </Button>
            </div>
            <div className="text-[20px]">
              <span className="mr-4">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="mr-4">
                <i className="fab fa-brands fa-facebook"></i>
              </span>
              <span className="mr-4">
                <i className="fab fa-brands fa-twitter"></i>
              </span>
              <span className="mr-4">
                <i className="fab fa-brands fa-pinterest"></i>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default NewsLetter;