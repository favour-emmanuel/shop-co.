import { Icon } from "@iconify/react/dist/iconify.js";

const NewsletterSection = () => {
  return (
    <div className="absolute w-full lg:max-w-[1100px] max-w-[450px] lg:rounded-2xl rounded-xl left-1/2 transform -translate-x-1/2 top-[-8rem] bg-black lg:px-14 px-8 lg:py-10 py-8 z-10 ">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <h1 className="font-bold lg:text-3xl text-xl text-white font-integral w-full max-w-[28rem]">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <form className="flex flex-col gap-y-5 lg:max-w-[20rem] justify-end lg:mt-0 mt-8 w-full">
          <div className="flex items-center py-3.5 px-4 rounded-full w-full lg:max-w-[20rem] gap-2 bg-white text-black/50">
            <Icon icon="mdi-light:email" className="text-lg" />
            <input
              type="email"
              placeholder="Enter your email"
              className="border-none w-full outline-none bg-transparent text-sm"
            />
          </div>
          <button className="py-3 px-4 rounded-full bg-white text-black font-bold">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
