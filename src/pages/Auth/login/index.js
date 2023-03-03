import React from "react";
import Input from "../../../layout/Auth/components/Input";
import Button from "../../../components/Button";
import { Authlayout } from "../../../layout/Auth";

export default function Login(props) {
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
        <Button center>Sign In</Button>
      </div>
    </Authlayout>
  );
}
