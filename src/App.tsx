import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import OnSale from "./pages/OnSale";
import NewArrivals from "./pages/NewArrivals";
import Brands from "./pages/Brands";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/on-sale" element={<OnSale />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/brands" element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
