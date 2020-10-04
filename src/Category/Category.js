import React, { Component } from 'react';
import { string, node } from 'prop-types';
import './Category.scss';
export class Category extends Component {
  render() {
    const { name, children } = this.props;
    return (
      <div className="category">
        <h2>{name}</h2>
        <div className="category-products-container">{children}</div>
      </div>
    );
  }
  static propTypes = {
    name: string,
    children: node,
  };
}
