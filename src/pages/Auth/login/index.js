import React, { useState } from "react";
import Input from "../../../layout/Auth/components/Input";
import Button from "../../../components/Button";
import { Authlayout } from "../../../layout/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import { URL } from "../../../components/Config";



export default function Login(props) {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", true);
    navigate(URL.ADMINDASHBOARD.BASE);
  };

  return (
    <Authlayout
      text="Not a member?"
      signIn="Sign in"
      headingText="Sign in to VynceShop"
      googleText="Sign in with Google"
      word="Sign in with Google"
    >
      <div className="bg-white w-100">
        <p>
          {props.text}
          <span>
            <a>{props.signIn}</a>
          </span>
        </p>
        <h1>{props.headingText}</h1>
        <Input />
        <div className="flex justify-center">
          <button
            className="py-3 px-8 bg-black text-white my-5"
            onClick={handleLogin}
          >
            Sign In
          </button>
          
        </div>
      </div>
    </Authlayout>
  );
}
