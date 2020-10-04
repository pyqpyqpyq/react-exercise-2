import { number } from 'prop-types';
import React ,{ Component } from 'react';

export class Header extends Component {
  render() {
        const {productNum}=this.props;
    return(
        <div className="header">
            <h1>Store</h1>
            <FishoppingCart color="white"/>
            <span>{productNum}</span>
        </div>
    );
    }
    static propTypes={
    productsNum: number,
    }
}