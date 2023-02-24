import React, { Component } from "react";

export default class Imagecontent extends Component {
  render() {
    return (
      <>
        <div className="bg-[#F2EDEB] my-20 h-fit ">
          <div className="grid grid-cols-2 max-md:grid-cols-1 pt-20 ">
            <div className="my-20">
              <h1 className="text-[43px] font-bold mr- pl-20 pr-[180px]">
                It’s official: The best of Thos
              </h1>
              <p className="text-[18px] my-10 pl-20 pr-[180px]">
                You asked, we delivered. Thos’ best 100 recipes are now
                available as a hardback and we deliver worldwide!
              </p>
              <button className="bg-[#232323] ml-20  text-white font-bold my-5 px-10 py-4">
                go to shop
              </button>
            </div>
            <div className="mt-8 ">
              <img
                src="Assets/image/bookimg.jpg"
                className="w-[70%] h-[430px] border-[30px] border-[#DED5D0] border-solid"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
        </div>
      </>
    );
  }
}
