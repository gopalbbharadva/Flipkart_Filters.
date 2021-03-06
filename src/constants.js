export const products = [
  {
    brand: "Adidas",
    size: "M",
    gender: "Male",
    price: 799,
    image:
      "https://rukminim1.flixcart.com/image/503/604/ktizdzk0/sweatshirt/d/o/o/m-h16228-adidas-original-imag6ux9xbhdw4er.jpeg?q=50",
  },
  {
    brand: "Adidas",
    size: "XS",
    gender: "Male",
    price: 559,
    image:
      "https://rukminim1.flixcart.com/image/503/604/jvqzo280/t-shirt/j/p/f/m-fj9216-adidas-original-imafgkj5ktfuzzhg.jpeg?q=50",
  },
  {
    brand: "Adidas",
    size: "S",
    gender: "Woman",
    price: 655,
    image:
      "https://rukminim1.flixcart.com/image/503/604/kmkxbww0/t-shirt/m/p/u/s-gm5190-adidas-original-imagfg58j47f3jfe.jpeg?q=50",
  },
  {
    brand: "Adidas",
    size: "XL",
    gender: "Woman",
    price: 899,
    image:
      "https://rukminim1.flixcart.com/image/503/604/k3ahbww0/t-shirt/m/4/9/s-eb6367-adidas-original-imafmaz6cvnefhkp.jpeg?q=50",
  },
  {
    brand: "Adidas",
    size: "S",
    gender: "Male",
    price: 1099,
    image:
      "https://rukminim1.flixcart.com/image/503/604/jx502vk0/t-shirt/8/h/j/m-fj9217-adidas-original-imafhzbcqpbm5trb.jpeg?q=50",
  },
  {
    brand: "Spykar",
    size: "L",
    gender: "Male",
    price: 550,
    image:
      "https://rukminim1.flixcart.com/image/503/604/kyhlfgw0/shirt/k/g/g/-original-imagapnte69zrztf.jpeg?q=50",
  },
  {
    brand: "Spykar",
    size: "M",
    gender: "Woman",
    price: 349,
    image:
      "https://rukminim1.flixcart.com/image/503/604/kdvzwcw0-0/t-shirt/c/n/c/s-wkt-01bj-008-deep-wine-spykar-original-imafuzzruhfgscfr.jpeg?q=50",
  },
  {
    brand: "Spykar",
    size: "XL",
    gender: "woman",
    price: 965,
    image:
      "https://rukminim1.flixcart.com/image/503/604/l3vxbbk0/t-shirt/t/y/5/s-wkt-01ba-013-spykar-original-imagewn5rk3wm5bd.jpeg?q=50",
  },
  {
    brand: "Levi's",
    size: "S",
    gender: "Male",
    price: 554,
    image:
      "https://rukminim1.flixcart.com/image/503/604/ktvucnk0/t-shirt/c/k/v/xl-81786-0064-levi-s-original-imag74suspyahx9z.jpeg?q=50",
  },
  {
    brand: "Levi's",
    size: "M",
    gender: "Woman",
    price: 447,
    image:
      "https://rukminim1.flixcart.com/image/503/604/kvtuxe80/t-shirt/i/h/6/s-23771-0248-levi-s-original-imag8ncp3erxrgmz.jpeg?q=50",
  },
];

export const initialState = {
  sortBy: null,
  categories: {
    s: false,
    m: false,
    l: false,
    xl: false,
  },
  brands: {
    adidas: false,
    spykar: false,
    levis: false,
  },
  gender: {
    male: false,
    female: false,
  },
};
