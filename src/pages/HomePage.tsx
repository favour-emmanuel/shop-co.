import BrowseByStyle from "../components/BrowseByStyle";
import Hero from "../components/Hero";
import NewArrivalsHome from "../components/NewArrivalsHome";
import TopSellingHome from "../components/TopSellingHome";

const HomePage = () => {
  return (
    <>
      <Hero />
      <NewArrivalsHome />
      <TopSellingHome />
      <BrowseByStyle />
    </>
  );
};

export default HomePage;
