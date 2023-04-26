import React, { Component } from "react";

const fetchComment = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(["A", "B", "C"]), 1000);
  });

export class CorrectlyState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      comments: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    })); // 1
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    })); // 2

    // Truyền nguyên 1 object với đầy đủ các thuộc tính của state
    fetchComment().then((res) => {
      this.setState((prevState) => ({
        ...prevState, // count, commmnet
        comments: res,
      }));
    });

    // Nhưng điều này không cần thiết, vì **React class component có cơ chế merge state, điều này chỉ xảy ra với class component, functional component không có tính năng này**

    // Chúng ta chỉ cần truyền vào `this.setState` một object với thuộc tính cần cập nhật là được rồi. Những thuộc tính không cần cập nhật thì chúng ta không cần truyền vào.

    fetchComment().then((res) => {
      this.setState({
        comments: res,
      });
    });

    // this.setState({
    //   count: this.state.count + 1,
    // });
    // // 0
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // // 1
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>CorrectlyState. Count: {this.state.count}</div>;
        {/* {this.state.comments.map()} */}
      </div>
    );
  }
}

export default CorrectlyState;
