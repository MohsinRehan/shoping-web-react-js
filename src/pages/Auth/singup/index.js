import React from "react";
import Button from "../../../components/Button";
import { Authlayout } from "../../../layout/Auth";
import { SingInput } from "./Component/input";

const SignUp = (props) => {
  return (
    <Authlayout
      text="Already a member"
      signIn="Sign in"
      headingText="Sign up to VynceShop"
      googleText="Sign up with Googles"
      word="Sign up with Google"
    >
      <div className="">
        <div className="bg-white w-100">
          <p>
            {props.text}
            <span>
              <a>{props.signIn}</a>
            </span>
          </p>
          <h1>{props.headingText}</h1>
          <SingInput/>
          <Button center>Sign up</Button>
        </div>
      </div>
    </Authlayout>
  );
};

export default SignUp;
