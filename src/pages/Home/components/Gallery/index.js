import React, { Component } from "react";

export default class Gallery extends Component {
  
  render() {
    return (
      <>
        <div>
          <div className="">
            <div>
              <img
                src={this.props.image}
                alt="background-image"
                className="w-full h-[330px]"
              />
             
            </div>
          </div>
        </div>
      </>
    );
  }
}
