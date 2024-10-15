import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { navItems } from "../data/data";

const Navbar = () => {
  return (
    <nav className="w-full lg:px-0 px-10 max-w-[1240px] mx-auto flex justify-between items-center my-6">
      <Link to={"/"}>
        <h1 className="font-integral font-bold mr-3 lg:text-2xl md:text-xl text-lg">
          Shop.co
        </h1>
      </Link>
      <ul className="flex items-center gap-7">
        {navItems.map((menu, index) => (
          <Link to={menu.route} key={index} className="text-base">
            {menu.label}
          </Link>
        ))}
      </ul>
      {/* search input */}
      <div className="flex items-center gap-3 bg-appGray py-3 px-4 w-full rounded-full max-w-[32rem]">
        <Icon icon="iconamoon:search-light" className="text-xl" />
        <input
          type="search"
          placeholder="Search for products..."
          className="bg-transparent outline-none  border-none w-full"
        />
      </div>
      {/* cart and account icons */}
      <div className="flex gap-5 items-center">
        <Icon icon="bi:cart" className="text-xl" />
        <Icon icon="codicon:account" className="text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
