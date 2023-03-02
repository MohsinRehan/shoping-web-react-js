import React from "react";
import PageLayout from "../../layout";
export default function About() {
  return (
    <PageLayout>
      <div className="flex justify-around items-center my-20">
        <img
          className="h-[630px] mx-20 w-[80%]"
          src="/Assets/image/mohsin.jpg"
          alt="book image"
        />
        <h1 className="text-center text-[47px] font-bold text-[#232323] p-20">
          My name is Mohsin and I love to write about food.
        </h1>
      </div>
      <div className="flex items-end my-40 flex-col">
        <div className="w-[60%]">
          <p className="text-[18px] my-10 mr-20">
            I grew up in the countryside, Michigan to be exact, and my family
            always gathered together for mealtimes. We would cook together and
            my grandparents’ vegetable patch was the pride and joy of my
            grandmother.
          </p>

          <p className="text-[18px] mb-20 mr-20">
            In my opinion, we should rethink our somewhat problematic
            relationship with food. At its best, it brings people together and
            nourishes our bodies. It shouldn’t be our enemy.
          </p>
        </div>
        <img
          className="h-[430px] mx-20 w-[55%]"
          src="/Assets/image/baurger.jpeg"
          alt="book image"
        />
      </div>
    </PageLayout>
  );
}
