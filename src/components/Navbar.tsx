import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { navItems } from "../data/data";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="w-full lg:px-20 px-10  mx-auto flex justify-between lg:items-center my-6">
      <div className="flex gap-3 items-center">
        <span className="lg:hidden cursor-pointer" onClick={() => setNav(!nav)}>
          <Icon icon="icon-park:hamburger-button" className="text-2xl" />
        </span>
        <Link to={"/"}>
          <h1 className="font-integral font-bold  lg:text-2xl md:text-xl text-lg">
            Shop.co
          </h1>
        </Link>

        {/* mobile menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 mx-0 lg:hidden w-full max-w-[30rem] bg-black h-screen z-[999] duration-300 px-10 py-8"
              : "fixed left-[-100%] top-0 h-full -z-10 duration-300"
          }
        >
          <div className="flex items-center justify-between text-white">
            <Link to={"/"}>
              <h1 className="font-integral font-bold lg:mr-3 lg:text-2xl md:text-xl text-lg">
                Shop.co
              </h1>
            </Link>
            <span className="cursor-pointer" onClick={() => setNav(!nav)}>
              <Icon icon="mi:close" className="text-2xl" />
            </span>
          </div>
          <ul className="flex flex-col mt-14 gap-y-10">
            {navItems.map((menu, index) => (
              <Link
                to={menu.route}
                key={index}
                onClick={() => setNav(!nav)}
                className="text-base text-white hover:text-gray-300 hover:duration-300"
              >
                {menu.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* desktop UL */}
      <ul className="lg:flex hidden items-center gap-8">
        {navItems.map((menu, index) => (
          <Link to={menu.route} key={index} className="text-[17px]">
            {menu.label}
          </Link>
        ))}
      </ul>
      {/* search input */}
      <div className="lg:flex hidden items-center gap-3 bg-appGray py-3.5 px-4 w-full rounded-full max-w-[38rem]">
        <Icon icon="iconamoon:search-light" className="text-xl" />
        <input
          type="search"
          placeholder="Search for products..."
          className="bg-transparent outline-none border-none w-full"
        />
      </div>
      {/* cart and account icons */}
      <div className="flex gap-5 items-center">
        <Icon
          icon="iconamoon:search-light"
          className="text-2xl md:hidden cursor-pointer"
        />
        <Icon icon="bi:cart" className="text-2xl cursor-pointer" />
        <Icon icon="codicon:account" className="text-2xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
