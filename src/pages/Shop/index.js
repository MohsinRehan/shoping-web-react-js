import React from "react";
import PageLayout from "../../layout";
import { useTranslation } from "react-i18next";

export default function Shop() {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <h1 className="text-[60px] my-20 text-center font-bold text-[#232323]">
        {t("Shop")}
      </h1>
      <div className="w-[30%] m-auto">
        <a className="flex flex-col items-center cursor-pointer">
          <span className="text-[18px] mr-2">
            <i className="fal fa-shopping-bag"></i>
          </span>
          {t("Shopping Bag")}
        </a>
        <div className="mt-8 mb-4">
          <img
            className="h-[430px] scale-60  hover:scale-100 hover:border-0 ease-in duration-500 border-[30px] border-[#DED5D0] border-solid w-[100%] max-sm:h-[230px] max-sm:border-[10px]"
            src="/Assets/image/bookimg.jpg"
            alt="book image"
          />
        </div>
        <div className="flex my-3 justify-between items-center">
          <div>
            <a className="text-[20px] cursor-pointer max-sm:text-[10px]">{t("best-Thos")}</a>
          </div>
          <div>
            <a className="text-[30px] font-bold cursor-pointer max-sm:text-[15px]">$0.002</a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
