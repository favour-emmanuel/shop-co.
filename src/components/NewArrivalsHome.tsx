import { Icon } from "@iconify/react/dist/iconify.js";
import { newArrHomeItems } from "../data/data";

const NewArrivalsHome = () => {
  return (
    <div className="lg:my-20 my-14 max-w-[1240px] lg:mx-auto mx-8">
      <h1 className="text-center font-bold font-integral text-3xl ">
        New Arrivals
      </h1>

      <div className="my-6 grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {newArrHomeItems.map((item, index) => (
          <div key={index} className="my-5">
            <div className="bg-[#F0EEED] p-2 rounded-2xl flex justify-center">
              <img src={item.image} alt="" />
            </div>
            <div className="my-5">
              <h2 className="font-bold text-lg">{item.label}</h2>
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
              <h2 className="text-lg font-bold">{item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsHome;
