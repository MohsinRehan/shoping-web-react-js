import React, { Component } from "react";
import PageLayout from "../../layout";
import Card from "./components/Card";
import Header from "./components/Header";
import Button from "../../components/Button";
import Imagecontent from "./components/Imagecontent";
import * as FOOD_DATA from "../Home/data/index.json";
import * as IMAGE_DATA from "../Home/data/gallery.json";
import Gallery from "./components/Gallery";

class Home extends Component {
  state = {
    data: { ...FOOD_DATA }.data,
    arrimage: { ...IMAGE_DATA }.image_data,
  };
  render() {
    return (
      <PageLayout>
        <Header />
        <div className="grid grid-cols-2 max-md:grid-cols-1 ml-20 mt-[150px] ">
          {this.state.data.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              img={item.image}
              date={item.date}
            />
          ))}
        </div>
        <Button />
        <Imagecontent />
        <div className="text-center font-bold text-[44px]">
          <h1>Follow on Instagram @Thos</h1>
        </div>
        <div className="grid grid-cols-4 gap-6 mx-20 my-20">
          {this.state.arrimage.map((item) => {
            return <Gallery key={item.id} image={item.image} />;
          })}
        </div>
      </PageLayout>
    );
  }
}

export default Home;
