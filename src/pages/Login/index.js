import React from "react";
import Googlebtn from "./components/Googlebtn";
import LeftSideLogo from "./components/leftsidelogin";
import VerticalText from "./components/Verticaltext";
import TwitterBtn from "./components/Twitterbtn";
import Input from "./components/Input";
import Button from "../../components/Button"

export default function Login() {
  return (
    <div className="grid grid-rows-1 grid-cols-[40%_60%]">
      <LeftSideLogo />
      <div className="bg-white w-100">
        <p className="text-right pr-6 pt-8">
          Not a member?
          <span className="text-blue-900 ml-2">
            <a href="">Sign in </a>
          </span>
        </p>
        <h1 className="text-[30px] font-bold text-center ml-2 mt-20 ">
          Sign in to VynceShop
        </h1>
        <div className="flex justify-center my-4 ">
          <Googlebtn /> <TwitterBtn />
        </div>
        <VerticalText />
        <Input />
        <Button center>Sign In</Button>
      </div>
    </div>
  );
}
