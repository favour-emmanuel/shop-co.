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
