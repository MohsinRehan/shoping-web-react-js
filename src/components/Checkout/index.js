import React from 'react'
import { AiOutlineLock } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const CheckoutPage = () => {
    const { t } = useTranslation();
  return (
    <div className="w-[60%] p-8">
          <h1 className="text-[28px] font-bold text-[#232323]">{t("Checkout")}</h1>
          <p className="pr-5 text-[17px] my-2  text-[#232323]">
            {t("EmailAdress")}
          </p>
          <input
            type="text"
            placeholder={t("emailplaceholder")}
            className="w-[100%] outline-none p-2 border-2 border-solid border-[#4533]"
          ></input>
          <div className="my-3">
            <input type="checkbox"></input>
            <span className="ml-2 text-[17px] text-[#232323] ">
              {t("checkbox")}
            </span>
          </div>
          <div className="flex items-center">
            <button className="w-96 py-3 my-4 px-8 bg-black text-white">
              {t("Checkout")}
            </button>
            <span className="ml-1">
              <AiOutlineLock />
            </span>
            <span className="ml-2 text-[14px] text-[#757575]">
              {t("tlsconnection")}
            </span>
          </div>
          <div>
            <h1 className="text-[20px] my-2">{t("Next")}</h1>
            <hr />
            <div className="my-2">
              <p>{t("Payment information")}</p>
              <p className="text-[#757575]">
                {t("payment method")}
              </p>
            </div>
            <div className="my-2">
              <p>{t("Order confirmation")}</p>
              <p className="text-[#757575]">
                {t("confirmationEmail")}
              </p>
            </div>
          </div>
        </div>
  )
}

export default CheckoutPage