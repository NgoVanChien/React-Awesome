// import React from "react";

// class BareButton extends React.Component {
//   // cách 1
//   handleClick = (value) => {
//     console.log(value);
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.handleClick("add")}>Add</button>
//         <button onClick={() => this.handleClick("edit")}>Edit</button>
//         <button onClick={() => this.handleClick("deleted")}>Delete</button>
//       </div>
//     );
//   }
// }

// import React from "react";

// class BareButton extends React.Component {
//   // Cách 2
//   // Currying rút gọn
//   //   handleClick = (value) => () => {
//   //     console.log(value);
//   //   };
//   // Currying đầy đủ

//   handleClick = (value) => {
//     console.log(" value ==>", value);
//     return () => {
//       console.log(value);
//     };
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick("add")}>Add</button>
//         <button onClick={this.handleClick("edit")}>Edit</button>
//         <button onClick={this.handleClick("deleted")}>Delete</button>
//       </div>
//     );
//   }
// }

// export default BareButton;

import React from "react";

class BareButton extends React.Component {
  // Cách 3
  constructor(props) {
    super(props);
  }

  // 1
  //   handleClick(value) {
  //     console.log(value);
  //   }

  // 2
  //   handleClick(event) {
  //     console.log(event);
  //   }

  // 3
  handleClick(event, value) {
    console.log(event, value);
  }
  render() {
    return (
      <div>
        {/* 1 lấy value ADD, EDT, DEL */}

        {/* <button onClick={this.handleClick.bind(this, "add")}>Add</button>
        <button onClick={this.handleClick.bind(this, "edt")}>Edit</button>
        <button onClick={this.handleClick.bind(this, "del")}>Delete</button> */}

        {/* 2  : lấy sự kiện event */}

        <button onClick={this.handleClick}>Add</button>

        {/* 3  : lấy sự kiện event Và VALUE ADD, EDT, DEL  */}

        <button onClick={(event) => this.handleClick(event, "edit")}>
          Edit
        </button>
        <button onClick={this.handleClick.bind(this, "del")}>Delete</button>
      </div>
    );
  }
}

export default BareButton;
