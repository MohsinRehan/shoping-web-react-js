import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <div>
          <div className="container  m-auto">
            <div className="mr-16">
              <img src={this.props.img} className="w-[100%]" alt="" />
              <h1 className="text-[24px] font-bold py-2">{this.props.title}</h1>
              <p className="py-1">{this.props.description}</p>
              <p>{this.props.createdA}</p>
              <p className="mt-1 mb-10">{this.props.date}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Card;
