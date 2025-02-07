import React from "react";
import Slider from "./Slider";
import SalesCard from "./SalesCard";
import BestCard from "./BestCard";
import ExloreProduct from "./ExloreProduct";
import Categorys from "./Categorys";
import Information from "./information";
import ProductGrid from "./Newarila";
import Delevry from "./Delevry";

function Home() {
  return (
    <div>
      <Slider />
      <SalesCard />
      <Categorys />
      <BestCard />
      <Information />
      <ExloreProduct />
      <ProductGrid />
      <Delevry />
    </div>
  );
}

export default Home;
