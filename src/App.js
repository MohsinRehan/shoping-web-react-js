import React, { Component } from "react";
import { BrowserRouter} from "react-router-dom";
import Mainroute from "./Routes";



export default class App extends Component {
  

  render() {
    return (
      <>
     <BrowserRouter>
      <Mainroute />
     </BrowserRouter>
        
      </>
    );
  }
}
