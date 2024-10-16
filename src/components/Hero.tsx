import vector1 from "../assets/hero-vec-1.svg";
import vector2 from "../assets/hero-vec-2.svg";
import heroImage from "../assets/hero-image.png";
import heroImageMobile from "../assets/hero-img-mobile.png";
import logo1 from "../assets/logo-1.svg";
import logo2 from "../assets/logo-2.svg";
import logo3 from "../assets/logo-3.svg";
import logo4 from "../assets/logo-4.svg";
import logo5 from "../assets/logo-5.svg";

const Hero = () => {
  return (
    <div>
      <div className="w-full bg-appGray  lg:px-20 my-10 lg:py-10 py-[2.8rem] lg:pl-20 lg:pr-0 pl-10 pr-10 flex flex-col lg:flex-row justify-between relative">
        <div className="w-full max-w-[38rem]">
          <h1 className="lg:text-6xl text-5xl font-bold font-integral my-2">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-satoshi text-base my-6 font-normal w-full max-w-[34rem]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="my-2 lg:py-[15px] py-4 px-3.5  w-full lg:max-w-[11rem] bg-black text-white rounded-full">
            Shop Now
          </button>
          <section className="flex items-center gap-10 my-7">
            <div className="border-r border-r-gray-400">
              <h2 className="font-bold lg:text-3xl text-2xl ">200+</h2>
              <p className="text-base mr-5">International Brands</p>
            </div>
            <div className="border-r border-r-gray-400">
              <h2 className="font-bold lg:text-3xl text-2xl">2,000+</h2>
              <p className="text-base mr-5">High-Quality Products</p>
            </div>
            <div>
              <h2 className="font-bold lg:text-3xl text-2xl">30,000+</h2>
              <p className="text-base">Happy Customers</p>
            </div>
          </section>
        </div>
        <div className="w-full">
          <img
            src={vector1}
            alt=""
            className="absolute z-10 lg:top-[9.8rem] lg:right-[38rem] bottom-[18rem]"
          />
          <img
            src={vector2}
            alt=""
            className="absolute z-10 lg:right-9 lg:top-8 right-10 bottom-[20rem]"
          />

          <div className="w-full">
            <img src={heroImage} alt="" className="hidden md:flex w-full  " />
          </div>
          <div className="relative bg-appGray w-full">
            <img src={heroImageMobile} alt="" className="md:hidden " />
          </div>
        </div>
      </div>
      {/* brand logos */}
      <div className="relative bg-red-200">
        <div className="absolute lg:bottom-11 bottom-0  w-full ">
          <div className="bg-black py-5 lg:px-20 px-10 flex gap-x-10 gap-y-7 lg:flex-row flex-wrap justify-between items-center">
            <img src={logo1} alt="" className="lg:max-w-[20rem] max-w-[8rem]" />
            <img src={logo2} alt="" className="lg:max-w-[20rem] max-w-[8rem]" />
            <img src={logo3} alt="" className="lg:max-w-[20rem] max-w-[8rem]" />
            <img src={logo4} alt="" className="lg:max-w-[20rem] max-w-[8rem]" />
            <img src={logo5} alt="" className="lg:max-w-[20rem] max-w-[8rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
