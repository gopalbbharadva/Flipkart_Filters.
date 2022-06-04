import React from "react";

export const ProductCard = ({ product }) => {
  const { gender, price, image, brand, size } = product;
  return (
    <div class="card card-shadow">
      <div class="card-image-container">
        <img class="image-responsive" src={image} alt="No preview available" />
      </div>
      <div class="card-body">
        <h3 class="card-title">{brand}</h3>
        <p class="card-sell-price">
          <span>{price} rs.</span>
        </p>
        <p>{gender}</p>
        <p>{size}</p>
        <button class="card-button is-cart">
          <span>
            <i class="fas fa-shopping-cart im"></i>Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
};
