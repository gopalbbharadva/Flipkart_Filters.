import { createContext, useContext, useReducer } from "react";
import { initialState } from "../constants";
import { FilterReducer } from "../Reducer/reducer";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(FilterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
