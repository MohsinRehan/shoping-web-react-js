import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-[#232323]  text-white font-bold my-5 px-8 py-4"
        >
          More articles
        </button>
      </div>
    );
  }
}
