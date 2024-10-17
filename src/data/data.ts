import img1 from "../assets/ar-1.png";
import img2 from "../assets/ar-2.png";
import img3 from "../assets/ar-3.png";
import img4 from "../assets/ar-4.png";

import newArrImg1 from "../assets/ts-1.png";
import newArrImg2 from "../assets/ts-2.png";
import newArrImg3 from "../assets/ts-3.png";
import newArrImg4 from "../assets/ts4.png";

import dress1 from "../assets/casual.png";
import dress2 from "../assets/formal.png";
import dress3 from "../assets/party.png";
import dress4 from "../assets/gym.png";

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

// New arrival Home

export interface newArrivalHome {
  image: string;
  label: string;
  price: string;
  rating: string;
  slashedPrice?: string;
  discount?: string;
}

export const newArrHomeItems: newArrivalHome[] = [
  {
    image: img1,
    label: "T-shirt with tape details",
    rating: "4.5/5",
    price: "$120",
  },
  {
    image: img2,
    label: "Skinny fit jeans",
    rating: "3.5/5",
    price: "$240",
    slashedPrice: "$260",
    discount: "-20%",
  },
  {
    image: img3,
    label: "Checkered shirt",
    rating: "4.5/5",
    price: "$180",
  },
  {
    image: img4,
    label: "Sleeve striped T-shirt",
    rating: "5.5/5",
    price: "$130",
    slashedPrice: "$160",
    discount: "-30%",
  },
  {
    image: img3,
    label: "Checkered shirt",
    rating: "4.5/5",
    price: "$180",
  },
  {
    image: img4,
    label: "Sleeve striped T-shirt",
    rating: "5.5/5",
    price: "$130",
    slashedPrice: "$160",
    discount: "-30%",
  },
];

// Top Selling
export interface topSelling {
  image: string;
  label: string;
  price: string;
  rating: string;
  slashedPrice?: string;
  discount?: string;
}

export const topSellingItems: topSelling[] = [
  {
    image: newArrImg1,
    label: "Vertical striped shirt",
    price: "$212",
    rating: "5.0/5",
    slashedPrice: "$232",
    discount: "-20%",
  },
  {
    image: newArrImg2,
    label: "Courage graphic T-shirt",
    price: "$145",
    rating: "4.0/5",
  },
  {
    image: newArrImg3,
    label: "Loose fit bermuda shorts",
    price: "$80",
    rating: "3.0/5",
  },
  {
    image: newArrImg4,
    label: "Faded skinny jeans",
    price: "$210",
    rating: "4.5/5",
  },
  {
    image: newArrImg3,
    label: "Loose fit bermuda shorts",
    price: "$80",
    rating: "3.0/5",
  },
  {
    image: newArrImg4,
    label: "Faded skinny jeans",
    price: "$210",
    rating: "4.5/5",
  },
];

// browse by dress style

export interface dressStyle {
  img: string;
  label: string;
}

export const dressStyleItem: dressStyle[] = [
  { img: dress1, label: "Casual" },
  {
    img: dress2,
    label: "Formal",
  },
  {
    img: dress3,
    label: "Party",
  },
  {
    img: dress4,
    label: "Gym",
  },
];
