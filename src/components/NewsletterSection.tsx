const NewsletterSection = () => {
  return (
    <div className="absolute w-full lg:max-w-[1100px] max-w-[450px] lg:rounded-2xl rounded-xl left-1/2 transform -translate-x-1/2 top-[-8rem] bg-black lg:px-14 px-8 lg:py-10 py-5 z-10 ">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center">
        <h1 className="font-bold lg:text-3xl text-xl text-white font-integral w-full max-w-[28rem]">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <form className="flex gap-y-5 flex-col justify-center lg:mt-0 mt-5">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-l-md outline-none"
          />
          <button className="p-2 bg-amber-400 text-black font-bold rounded-r-md">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
