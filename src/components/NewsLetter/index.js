import React, { Component } from "react";
import Button from "../Button";

export default class NewsLetter extends Component {
  render() {
    return (
      <>
        <div className="w-100 bg-[#E8E3E1] ">
          <div className="flex flex-col items-center justify-center pt-10 pb-24">
            <h1 className="text-[24px] font-bold ml-[60px] my-5">
              Subscribe to our newsletter
            </h1>
            <div>
              <label className="text-[18px]">Email address*</label>
              <br></br>
              <input
                className="px-8 mt-1 py-3 border-0 outline-0"
                type={"email"}
                placeholder="Your email address"
              />
            </div>
            <div>
              <Button>
                Subscribe
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
}
