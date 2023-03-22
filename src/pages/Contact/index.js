import React from "react";
import Button from "../../components/Button";
import PageLayout from "../../layout";
import { useTranslation } from "react-i18next";

const Contact= () => {
  const { t } = useTranslation();
  return (
    <PageLayout>
      <div>
        <h1 className="text-center text-[#232323]  text-[65px] font-bold mt-28">
         {t("touch")}
        </h1>
        <p className="text-center text-[#232323]  py-10">
          {t("suggestion")} {t("represent")}
          <br />{t("partnership")}{t("hear")}
        </p>
      </div>
      <div className="flex items-center flex-col">
        <span className="text-[#232323]">info@thos.com</span>
        <span className="text-[#232323]">123-456-7890</span>
      </div>
      <div className="container w-2/4 mx-auto">
        <label className="text-[18px] my-2 text-[#232323]">{t("Name")}</label>
        <br />
        <input
          type="text"
          className="bg-[#F1F1F1] w-[100%] py-3 px-4 mb-6 outline-none"
          placeholder={t("nameplacholder")}
        />
        <br />
        <label className="text-[18px] my-2 text-[#232323]">{t("Last-name")}</label>
        <br />
        <input
          type="text"
          className="bg-[#F1F1F1] w-[100%] py-3 px-4 mb-6 outline-none"
          placeholder={t("lnameplaceholder")}
        />
        <br />
        <label className="text-[18px] my-2 text-[#232323]">Your {t("email")}</label>
        <br />
        <input
          type="text"
          className="bg-[#F1F1F1] w-[100%] py-3 px-4 mb-6 outline-none"
          placeholder={t("emailplaceholder")}
        />
        <br />
        <label className="text-[18px] my-2 text-[#232323]">{t("Message")}</label>
        <br />
        <textarea
          className="bg-[#F1F1F1] w-[100%] h-20 py-4 px-4 mb-6 outline-none"
          placeholder={t("mgsplaceholder")}
        ></textarea>
        <Button center>{t("Submit")}</Button>
      </div>
    </PageLayout>
  );
}

export default Contact;