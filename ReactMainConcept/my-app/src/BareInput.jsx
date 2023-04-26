import React from "react";
import PropTypes from "prop-types";

class BareInput extends React.Component {
  render() {
    const { type: typeInput, ...rest } = this.props;
    return <input {...rest} type={typeInput} />;
  }
}

// function BareInput(props) {
//   const { type, ...rest } = props
//   return <input {...rest} />
// }

// ## Đổi tên prop

// ```jsx
// class CustomInput extends React.Component {
//   render() {
//     const { onChange: onHandleChange, ...rest } = this.props
//     return <input {...rest} onChange={onHandleChange} />
//   }
// }
// ```// Nếu với functional component

// ```jsx
// function CustomInput({ onChange: onHandleChange, ...rest }) {
//   return <input {...rest} onChange={onHandleChange} />
// }
// ```;
BareInput.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
};

export default BareInput;
