import React from "react";
import { Filter } from "../Components/Filter/Filter";
import { ProductCard } from "../Components/ProcutCard";
import { useFilter } from "../Context/FilterContext";
import {
  getFilterByBrands,
  getFilterByCategories,
  getFilterByGender,
} from "../FilterHelpers/getFilterByCategories";
import { getSortByPriceOrder } from "../FilterHelpers/getSortByPrice";
import products from "./data.json";
import "./ProductListing.css";

export const ProductListing = () => {
  const {
    filterState: { sortBy, categories, brands, gender },
  } = useFilter();

  const temp = [...products];

  const filterByCategories = getFilterByCategories(temp, categories, gender);
  const filterByBrands = getFilterByBrands(filterByCategories, brands);
  const filterByGender = getFilterByGender(filterByBrands, gender);
  const result = getSortByPriceOrder(filterByGender, sortBy);

  return (
    <>
      <div className="flex-container">
        <Filter />
        <div className="grid-40">
          {result.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
