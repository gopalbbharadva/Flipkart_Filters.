import React from "react";
import { initialState } from "../../constants";
import { useFilter } from "../../Context/FilterContext";
import "./Filter.css";

export const Filter = () => {
  const {
    filterDispatch,
    filterState: { sortBy, categories, brands, gender },
  } = useFilter();
  const { s, m, l, xl } = categories;
  const { adidas, spykar, levis } = brands;
  const { male, female } = gender;

  return (
    <div className={`sidebar position-fixed`}>
      <div className="filter-heading pd-sm">
        <button
          //   onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent clr-black btn-no-event fs-btw-ml"
        >
          Filters
          {/* {isOpen ? "APPLY" : "FILTERS"} */}
        </button>
        <button
          onClick={() =>
            filterDispatch({ type: "CLEAR_ALL", payload: initialState })
          }
          className="bg-transparent clr-black pd-sm btn-underline"
        >
          Clear All
        </button>
      </div>

      <div className="filter-section">
        <div className="price-category">
          <h4 className="cat-heading">Sort by pricing</h4>
          <label className="label-style" htmlFor="lth">
            <input
              id="lth"
              onChange={() =>
                filterDispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
              }
              checked={sortBy && sortBy === "LOW_TO_HIGH"}
              type="radio"
              name="price-sort"
            />
            Low To High
          </label>
          <label className="label-style" htmlFor="htl">
            <input
              id="htl"
              onChange={() =>
                filterDispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
              }
              checked={sortBy && sortBy === "HIGH_TO_LOW"}
              type="radio"
              name="price-sort"
            />
            High To Low
          </label>
        </div>
        <div className="book-category">
          <h4 className="cat-heading">Size</h4>
          <label className="label-style" htmlFor="small">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_SMALL",
                  payload: e.target.checked,
                })
              }
              checked={s}
              value={s}
              type="checkbox"
              id="small"
            />
            S
          </label>
          <label className="label-style" htmlFor="medium">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_MEDIUM",
                  payload: e.target.checked,
                })
              }
              checked={m}
              value={m}
              type="checkbox"
              id="medium"
            />
            M
          </label>
          <label className="label-style" htmlFor="large">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_LARGE",
                  payload: e.target.checked,
                })
              }
              checked={l}
              value={l}
              type="checkbox"
              id="large"
            />
            L
          </label>
          <label className="label-style" htmlFor="extra_large">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_EXTRA_LARGE",
                  payload: e.target.checked,
                })
              }
              checked={xl}
              value={xl}
              type="checkbox"
              id="extra_large"
            />
            XL
          </label>
        </div>
        <div className="book-category">
          <h4 className="cat-heading">Brand</h4>
          <label className="label-style" htmlFor="Adidas">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_ADIDAS",
                  payload: e.target.checked,
                })
              }
              checked={adidas}
              value={adidas}
              type="checkbox"
              id="Adidas"
            />
            Adidas
          </label>
          <label className="label-style" htmlFor="Spykar">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_SPYKAR",
                  payload: e.target.checked,
                })
              }
              checked={spykar}
              value={spykar}
              type="checkbox"
              id="Spykar"
            />
            Spykar
          </label>
          <label className="label-style" htmlFor="Levi's">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_LEVIS",
                  payload: e.target.checked,
                })
              }
              checked={levis}
              value={levis}
              type="checkbox"
              id="Levi's"
            />
            Levi's
          </label>
        </div>
        <div className="book-category">
          <h4 className="cat-heading">Gender</h4>
          <label className="label-style" htmlFor="Male">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_MALE",
                  payload: e.target.checked,
                })
              }
              checked={male}
              value={male}
              type="checkbox"
              id="Male"
            />
            Male
          </label>
          <label className="label-style" htmlFor="Female">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: "FILTER_BY_FEMALE",
                  payload: e.target.checked,
                })
              }
              checked={female}
              value={female}
              type="checkbox"
              id="Female"
            />
            Female
          </label>
        </div>
      </div>
    </div>
  );
};
