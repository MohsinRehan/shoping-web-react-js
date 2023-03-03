import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div
        className={`w-full h-fit flex items-center ${
          this.props.left
            ? "justify-start"
            : this.props.center
            ? "justify-center"
            : this.props.right
            ? "justify-end"
            : ""
        }`}
      >
        <button className="py-3 px-8 bg-black text-white my-5">
          {this.props.children}
        </button>
      </div>
    );
  }
}
