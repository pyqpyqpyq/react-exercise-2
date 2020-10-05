import React, { Component } from 'react';
import { Header } from './Header';
import { Category } from './Category';
import { Product } from './Product';
import './App.scss';

class App extends Component {
  state = {
    categories: [],
    productsNum: 0,
  };

  handleAddToCart = () => {
    const { state } = this;
    const { productsNum } = state;
    this.setState({
      ...state,
      productsNum: productsNum + 1,
    });
  };
  componentDidMount() {
    this.fetchData().then(this.buildCategories).catch(console.error);
  }

  buildCategories = (data) => {
    const { state } = this;
    const { categories } = state;

    data.forEach((item) => {
      const { category: categoryName } = item;
      let category = categories.find((c) => c.name === categoryName);
      if (!category) {
        category = {
          name: categoryName,
          products: [],
        };
        categories.push(category);
      }
      category.products.push({
        name: item.name,
        price: item.price,
      });
    });

    this.setState({
      ...state,
      categories,
    });
  };

  categoriesRender() {
    const { categories } = this.state;
    return categories.map((category) => (
      <Category key={category.name} name={category.name}>
        {this.productsRender(category.products)}
      </Category>
    ));
  }

  productsRender(products) {
    return products.map((product) => (
      <Product
        key={product.name}
        name={product.name}
        price={product.price}
        onAddToCart={this.handleAddToCart}
      />
    ));
  }

  render() {
    const { productsNum } = this.state;
    const categories = this.categoriesRender();
    return (
      <main className="app">
        <Header productsNum={productsNum} />
        {categories}
      </main>
    );
  }

  fetchData() {
    return fetch('http://localhost:3000/products').then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
}

export default App;
// import React, { Component } from 'react';
// import './App.scss';
// import { Category } from './Category';
// import { Header } from './Header';
// import { Product } from './Product';

// class App extends Component {
//   state = {
//     categories: [],
//     productsNum: 0,
//   };

//   handleAddToCart = () => {
//     const { state } = this;
//     //     const {comment,index,deleteComment} = this
//     // 上面的这句话是一个简写，最终的含义相当于
//     // const  comment = this.comment
//     // const  index = this.index
//     // const   deleteComment = this.deleteComment

//     //     const { xxx } = this.state;
//     //     上面的写法是es6的写法，其实就相当于：
//     //      const xxx = this.state.xxx
//     const { productsNum } = state;

//     this.setState({
//       ...state,
//       productsNum: productsNum + 1,
//     });
//   };

//   buildCategories = (data) => {
//     const { state } = this;
//     const { categories } = state;

//     data.forEach((item) => {
//       const { category: categoryName1 } = item;

//       let category = categories.find((c) => c.name === categoryName1);

//       if (!category) {
//         category = {
//           name: categoryName1,
//           products: [],
//         };

//         categories.push(category);
//       }

//       category.products.push({
//         name: item.name,
//         price: item.price,
//       });
//     });

//     this.setState({
//       ...state,
//       categories,
//     });
//   };

//   componentDidMount() {
//     this.fetchData().then(this.buildCategories).catch(console.error);
//   }

//   categoriesRender() {
//     const { categories } = this.state;

//     return categories.map((category) => (
//       <Category key={category.name} name={category.name}>
//         {this.productsRender(category.products)}
//       </Category>
//     ));
//   }

//   productsRender(products) {
//     return products.map((product) => (
//       <Product
//         key={product.name}
//         name={product.name}
//         price={product.price}
//         onAddToCart={this.handleAddToCart}
//       />
//     ));
//   }

//   render() {
//     const { productsNum } = this.state;
//     const categories = this.categoriesRender();

//     return (
//       <main className="app">
//         <Header productsNum={productsNum} />
//         {categories}
//       </main>
//     );
//   }

//   fetchData() {
//     return fetch('http://localhost:3000/products').then((response) => {
//       if (response.status !== 200) {
//         throw new Error(response.statusText);
//       }

//       return response.json();
//     });
//   }
// }

// export default App;
