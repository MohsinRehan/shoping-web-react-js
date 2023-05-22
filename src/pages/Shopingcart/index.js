import React, { useEffect, useState } from "react";
import PageLayout from "../../layout";
import { CheckoutCart } from "../../components/ShopingCart";
import CheckoutPage from "../../components/Checkout";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const ShopCart = () => {
  const { t } = useTranslation();
  const [localData, setLocalData] = useState([]);

  const totalPayment = localData.reduce((acc, item) => {
    return +acc + +(item.Price * item.quantity);
  }, 0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("sendData"));
    setLocalData(data);
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-col items-center my-8">
        <span className="text-[18px] mr-2">
          <i className="fal fa-shopping-bag"></i>
        </span>
        <p>{t("Shopping Bag")}</p>
      </div>
      <div className="flex my-8 max-sm:flex-col">
        <div className="w-[35%] h-[350px] overflow-y-auto max-sm:w-[100%] ">
          <div>
            <h1 className="text-[28px] font-bold text-[#232323] m-3">
              {t("Shopping cart")}
            </h1>
            <span>
              <a href="#" className="mx-4">
                {t("Store")}
              </a>
              /
              <a href="#" className="mx-4">
                {t("Shopping cart")}
              </a>
            </span>
          </div>

          {localData.map((item, i) => (
            <CheckoutCart key={item.id} item={item} />
          ))}
          <div className="flex my-2 justify-between ml-4">
            <h1>{t("Total Payment")} :</h1>
            <p>RS: {totalPayment}</p>
          </div>
        </div>
        <CheckoutPage />
      </div>
    </PageLayout>
  );
};

export default ShopCart;
