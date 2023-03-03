import React, { Children } from "react";
import GoogleButton from "../../components/GoogleButton";
import LeftSideLogo from "./components/LeftSideLogo";
import VerticalText from "./components/Verticaltext";

export const Authlayout = ({
  children,
  text,
  signIn,
  headingText,
  googleText,
  word,
}) => {
  return (
    <div className="grid grid-rows-1 grid-cols-[40%_60%]">
      <LeftSideLogo />
      <div>
        <p className="text-right pr-6 pt-8">
          {text}
          <span className="text-blue-900 ml-2">
            <a href="">{signIn}</a>
          </span>
        </p>
        <h1 className="text-[30px] font-bold text-center ml-2 mt-16 ">
          {headingText}
        </h1>
        <GoogleButton text={googleText}/>
        <VerticalText vertext={word}/>
        {children}
      </div>
    </div>
  );
};
