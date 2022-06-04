export const getFilterByCategories = (products, categories, brands, gender) => {
  let filteredData = [];
  for (let category in categories) {
    if (categories[category]) {
      const result = products.filter(
        (item) => item.size.toLowerCase() === category
      );
      filteredData.unshift(...result);
    }
    console.log("outside if");
  }

  return filteredData.length === 0 ? products : filteredData;
};

export const getFilterByBrands = (products, brands) => {
  const filteredData = [];
  for (let brand in brands) {
    if (brands[brand]) {
      const result = products.filter(
        (item) => item.brand.toLowerCase() === brand
      );
      filteredData.unshift(...result);
    }
  }
  return filteredData.length === 0 ? products : filteredData;
};

export const getFilterByGender = (products, gender) => {
  let filteredData = [];
  for (let gen in gender) {
    if (gender[gen]) {
      const result = products.filter(
        (item) => item.gender.toLowerCase() === gen
      );
      filteredData.unshift(...result);
    }
  }
  return filteredData.length === 0 ? products : filteredData;
};
