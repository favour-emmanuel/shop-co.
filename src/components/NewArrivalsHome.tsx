import { Icon } from "@iconify/react/dist/iconify.js";
import { newArrHomeItems } from "../data/data";
import { useState } from "react";

const NewArrivalsHome = () => {
  const [showAll, setShowAll] = useState(false);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="lg:my-20 my-24 max-w-[1240px] lg:mx-auto mx-8">
      <h1 className="text-center lg:mt-0 mt-10 font-bold font-integral text-3xl ">
        New Arrivals
      </h1>

      <div className="my-6 grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {newArrHomeItems
          .slice(0, showAll ? newArrHomeItems.length : 4)
          .map((item, index) => (
            <div key={index} className="my-5">
              <div className="bg-[#F0EEED] p-2 rounded-2xl flex justify-center">
                <img src={item.image} alt="" />
              </div>
              <div className="my-5">
                <h2 className="font-bold  text-lg">{item.label}</h2>
                <div className="flex items-center gap-4 ">
                  <div className="flex items-center gap-2 text-[#FFC633]">
                    <Icon icon="ri:star-fill" />
                    <Icon icon="ri:star-fill" />
                    <Icon icon="ri:star-fill" />
                    <Icon icon="ri:star-fill" />
                    <Icon icon="mingcute:star-half-fill" />
                  </div>
                  <p>{item.rating}</p>
                </div>
                <div className="flex items-center gap-3 my-1">
                  <h2 className="text-xl font-extrabold">{item.price}</h2>
                  {item.slashedPrice && (
                    <h2 className="text-lg font-bold text-black/40">
                      {item.slashedPrice}
                    </h2>
                  )}

                  {item.discount && (
                    <span className="py-1.5 text-[13px] text-[#FF3333] font-normal px-3 rounded-full bg-appRed/10">
                      {item.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* View all Button  */}
      <div
        onClick={handleViewAll}
        className="flex justify-center items-center border max-w-[18rem] mx-auto border-black/10 py-3.5 px-4 rounded-full cursor-pointer"
      >
        <button className="text-lg font-medium text-black">View all</button>
      </div>
    </div>
  );
};

export default NewArrivalsHome;
