import React from "react";
import PageLayout from "../../layout";

export default function Shop() {
  return (
    <PageLayout>
      <h1 className="text-[60px] my-20 text-center font-bold text-[#232323]">
        Shop
      </h1>
      <div className="w-[30%] m-auto">
        <a className="flex flex-col items-center cursor-pointer">
          <span className="text-[18px] mr-2">
            <i className="fal fa-shopping-bag"></i>
          </span>
          Shopping bag
        </a>
        <div className="mt-10 mb-4">
          <img
            className="h-[430px] scale-60  hover:scale-100 hover:border-0 ease-in duration-500 border-[30px] border-[#DED5D0] border-solid w-[100%]"
            src="/Assets/image/bookimg.jpg"
            alt="book image"
          />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <a className="text-[20px] cursor-pointer">The best of Thos</a>
          </div>
          <div>
            <a className="text-[30px] font-bold cursor-pointer">$0.002</a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
