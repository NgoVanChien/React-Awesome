import React, { Component } from "react";
import ProductItem from "./ProductItem";

export class Productlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [
        {
          id: "1a",
          name: "Sony",
          avatar: "🎈",
        },
        {
          id: "2b",
          name: "Iphone",
          avatar: "🎉",
        },
        {
          id: "3c",
          name: "Samsung",
          avatar: "🎁",
        },
      ],
    };
  }

  orderProductList = () => {
    this.setState((prevState) => ({
      productList: prevState.productList.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }),
    }));
  };

  addProduct = () => {
    this.setState((prevState) => ({
      productList: [
        {
          id: "4d",
          name: "huewei",
          avatar: "👍",
        },
        ...prevState.productList,
      ],
    }));
  };

  render() {
    return (
      <div>
        <h1>Productlist</h1>
        <button onClick={this.orderProductList}>Order Product List</button>
        <button onClick={this.addProduct}> Add Product</button>
        <div className="product-list">
          {this.state.productList.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </div>
        {/* <div className="product-list">
          {this.state.productList.map((product, index) => (
            <ProductItem product={product} key={index} />
          ))}
        </div> */}
      </div>
    );
    // const list = this.state.productList.map((product) => (
    //   <ProductItem product={product} key={product.id} />
    // ));
    // return (
    //   <div>
    //     <h1>Productlist</h1>
    //     <div className="product-list">{list}</div>
    //   </div>
    // );
  }
}

export default Productlist;
