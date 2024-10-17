import BrowseByStyle from "../components/BrowseByStyle";
import CustomerReview from "../components/CustomerReview";
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
      <CustomerReview />
    </>
  );
};

export default HomePage;
