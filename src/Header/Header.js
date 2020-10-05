import { number } from 'prop-types';
import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import './Header.scss';

export class Header extends Component {
  render() {
    const { productsNum } = this.props;
    return (
      <div className="header">
        <h1>Store</h1>
        <FiShoppingCart color="white" />
        <span>{productsNum}</span>
      </div>
    );
  }
  static propTypes = {
    productsNum: number,
  };
}
