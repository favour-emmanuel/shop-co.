import img1 from "../assets/ar-1.png";
import img2 from "../assets/ar-2.png";
import img3 from "../assets/ar-3.png";
import img4 from "../assets/ar-4.png";

export interface navMenus {
  label: string;
  route: string;
  onclick: () => void;
}

export const navItems: navMenus[] = [
  {
    label: "Shop",
    route: "/shop",
    onclick: () => {},
  },
  {
    label: "On Sale",
    route: "/on-sale",
    onclick: () => {},
  },
  {
    label: "New Arrivals",
    route: "/new-arrivals",
    onclick: () => {},
  },
  {
    label: "Brands",
    route: "/brands",
    onclick: () => {},
  },
];

export interface newArrivalHome {
  image: string;
  label: string;
  price: string;
  rating: string;
}

export const newArrHomeItems: newArrivalHome[] = [
  {
    image: img1,
    label: "T-SHIRT WITH TAPE DETAILS",
    rating: "4.5/5",
    price: "$120",
  },
  {
    image: img2,
    label: "SKINNY FIT JEANS",
    rating: "3.5/5",
    price: "$240",
  },
  {
    image: img3,
    label: "CHECKERED SHIRT",
    rating: "4.5/5",
    price: "$180",
  },
  {
    image: img4,
    label: "SLEEVE STRIPED T-SHIRT",
    rating: "5.5/5",
    price: "$130",
  },
];
