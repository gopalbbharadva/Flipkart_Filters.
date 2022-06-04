export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "FILTER_BY_SMALL":
      return {
        ...state,
        categories: { ...state.categories, s: action.payload },
      };

    case "FILTER_BY_MEDIUM":
      return {
        ...state,
        categories: { ...state.categories, m: action.payload },
      };

    case "FILTER_BY_LARGE":
      return {
        ...state,
        categories: { ...state.categories, l: action.payload },
      };

    case "FILTER_BY_EXTRA_LARGE":
      return {
        ...state,
        categories: {
          ...state.categories,
          xl: action.payload,
        },
      };

    case "FILTER_BY_ADIDAS":
      return {
        ...state,
        brands: { ...state.brands, adidas: action.payload },
      };

    case "FILTER_BY_SPYKAR":
      return {
        ...state,
        brands: { ...state.brands, spykar: action.payload },
      };

    case "FILTER_BY_LEVIS":
      return {
        ...state,
        brands: {
          ...state.brands,
          levis: action.payload,
        },
      };

    case "FILTER_BY_MALE":
      return {
        ...state,
        gender: { ...state.gender, male: action.payload },
      };

    case "FILTER_BY_FEMALE":
      return {
        ...state,
        gender: { ...state.gender, female: action.payload },
      };

    case "CLEAR_ALL":
      return action.payload;
    default:
      return state;
  }
};
