import React from "react";
import { dressStyleItem } from "../data/data";

const BrowseByStyle = () => {
  return (
    <div className="w-full lg:px-20 px-10 my-10 lg:my-14">
      <div className="mx-auto max-w-[1440px] lg:rounded-3xl rounded-2xl lg:px-10 px-8 lg:py-8 py-4 bg-[#F0F0F0]">
        <h1 className="text-center w-full lg:max-w-[35rem] max-w-[16rem] mx-auto font-bold lg:text-4xl text-3xl font-integral my-6">
          Browse By Dress Style
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-4 gap-y-6 my-8">
          {/* Top Left Smaller Grid */}
          <div className="bg-white p-1 rounded-lg flex flex-col justify-between relative">
            <img
              src={dressStyleItem[0].img}
              alt={dressStyleItem[0].label}
              className="w-full h-full object-cover"
            />

            <h2 className="text-center font-semibold text-lg pl-2 mt-2 absolute top-[-5px]">
              {dressStyleItem[0].label}
            </h2>
          </div>

          {/* Top Right Bigger Grid */}
          <div className="col-span-2 bg-white p-1 rounded-lg flex lg:flex-row flex-col justify-between">
            <h2 className="text-center font-semibold text-lg pl-2 mt-2 absolute">
              {dressStyleItem[1].label}
            </h2>

            <img
              src={dressStyleItem[1].img}
              alt={dressStyleItem[1].label}
              className=" object-cover h-full w-full"
            />
          </div>

          {/* Bottom Left Bigger Grid */}
          <div className="col-span-2 bg-white p-1 rounded-lg flex lg:flex-row flex-col justify-between relative">
            <img
              src={dressStyleItem[2].img}
              alt={dressStyleItem[2].label}
              className=" object-cover h-full w-full"
            />
            <h2 className="text-center font-semibold text-lg pl-2 mt-2 absolute top-0">
              {dressStyleItem[2].label}
            </h2>
          </div>

          {/* Bottom Right Smaller Grid */}
          <div className="bg-white p-1 rounded-lg flex lg:flex-row flex-col justify-between relative">
            <img
              src={dressStyleItem[3].img}
              alt={dressStyleItem[3].label}
              className="h-full object-cover"
            />
            <h2 className=" font-semibold ltext-lg mt-2 pl-2 absolute top-[-5px]">
              {dressStyleItem[3].label}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByStyle;
