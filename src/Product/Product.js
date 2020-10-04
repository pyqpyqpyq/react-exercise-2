import React, { Component } from 'react';
import { string, func } from 'prop-types';
import productImgSrc from '../assets/product_image_placeholder.png';

export class Product extends Component {
  render() {
    const { name, price, onAddToCart } = this.props;

    return (
      <div className="product">
        <span className="product-name">{name}</span>
        <img src={productImgSrc} alt={name} />
        <div classNAme="product-price-btn-container">
          <span className="product-price">{price}</span>
          <button className="product-add-cart-btn" onClick={onAddToCart}>
            add to cart
          </button>
        </div>
      </div>
    );
  }
  static propTypes = {
    name: string,
    price: string,
    onAddToCart: func,
  };
}
