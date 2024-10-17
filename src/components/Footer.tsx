import { Link } from "react-router-dom";
import NewsletterSection from "./NewsletterSection";
import { footerLinks } from "../data/data";
import { Icon } from "@iconify/react/dist/iconify.js";
import logo1 from "../assets/Visa.svg";
import logo2 from "../assets/Mastercard.svg";
import logo3 from "../assets/Paypal.svg";
import logo4 from "../assets/ Pay.svg";
import logo5 from "../assets/G Pay.svg";

interface paymentGateway {
  img: string;
}

const gateWayLogos: paymentGateway[] = [
  {
    img: logo1,
  },
  {
    img: logo2,
  },
  {
    img: logo3,
  },
  {
    img: logo4,
  },
  {
    img: logo5,
  },
];

const Footer = () => {
  return (
    <div className="relative mt-[9rem]">
      {/* Stack Newsletter Section slightly on top of Footer */}
      <NewsletterSection />
      {/* Main Footer */}
      <div className="relative lg:px-20 px-10 lg:py-20 py-8 bg-[#f0f0f0] text-black/60">
        <div className="flex flex-col lg:flex-row lg:gap-[7.8rem] lg:my-12 my-5">
          <div className="w-full lg:max-w-[18rem] lg:mt-0 mt-14">
            <Link to={"/"}>
              <h1 className="font-integral font-bold text-black lg:text-[1.6rem] text-xl lg:mt-0 mt-20">
                Shop.co
              </h1>
            </Link>

            <p className="lg:text-base text-sm my-4">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            {/* social icons */}
            <div className="flex items-center gap-3 lg:my-8 my-3 lg:mb-0 mb-8">
              <Icon
                icon="mdi:twitter"
                className="text-[1.4rem] cursor-pointer hover:text-black/70 hover:duration-300 text-black"
              />
              <Icon
                icon="ic:sharp-facebook"
                className="text-[1.4rem] cursor-pointer hover:text-black/70 hover:duration-300 text-black"
              />
              <Icon
                icon="lucide:instagram"
                className="text-[1.4rem] cursor-pointer hover:text-black/70 hover:duration-300 text-black"
              />
              <Icon
                icon="mdi:github"
                className="text-[1.4rem] cursor-pointer hover:text-black/70 hover:duration-300 text-black"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
            {footerLinks.map((item, index) => (
              <div key={index}>
                <h2 className="font-normal tracking-[0.24rem] text-black uppercase lg:text-[17px] text-[15.6px] mb-4">
                  {item.title}
                </h2>
                <ul className="space-y-4">
                  {" "}
                  {/* This ensures the links are displayed in a column */}
                  {item.links.map((link, index) => (
                    <li
                      key={index}
                      className="text-sm lg:text-base lg:text-balance hover:underline hover:duration-300 hover:ease-in-out hover:text-black/80 cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex lg:flex-row flex-col lg:gap-y-0 gap-y-5 justify-between lg:items-center border-t border-t-black/10 pt-8">
          <p className="lg:text-base text-sm">
            Shop.co &copy; 2000-2023, All Rights Reserved
          </p>
          <div className="flex items-center gap-3">
            {gateWayLogos.map((img, index) => (
              <div
                key={index}
                className="bg-white py-2.5 px-3 rounded-md border border-[#D6DCE5]"
              >
                <img src={img.img} className="w-10" alt={img.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
