import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    const { searchText, inStock, handleChange } = this.props;

    return (
      // Cách 2
      <form>
        <input
          type="text"
          placeholder="Search"
          name="product"
          value={searchText}
          onChange={handleChange}
        />
        <div>
          <input
            type="checkbox"
            value={inStock}
            name="in stock"
            onChange={handleChange}
          />
          Only show products in stock
        </div>
      </form>

      // Cách 1

      // <form>
      //   <input
      //     type="text"
      //     placeholder="Search"
      //     value={searchText}
      //     onChange={handleChange("searchText")}
      //   />
      //   <div>
      //     <input
      //       type="checkbox"
      //       value={inStock}
      //       onChange={handleChange("inStock")}
      //     />
      //     Only show products in stock
      //   </div>
      // </form>
    );
  }
}

export default SearchBar;
