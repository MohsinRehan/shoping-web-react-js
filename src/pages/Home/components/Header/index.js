import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <>
        <div className="mt-10">
          <h1 className="text-[70px] text-center font-bold mt-20 text-[#232323] max-md:text-[50px]	">
            My culinary journey <br></br>from A to Z
          </h1>
          <p className="text-center mt-8 text-[20px] text-[#232323] my-5">
            Join me for daily reflections and delicious recipes
          </p>
        </div>
      </>
    );
  }
}

export default Header;
