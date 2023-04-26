import React, { Component } from "react";
import PropTypes from "prop-types";

export class BoilingVerdict extends Component {
  render() {
    // console.log(this.props.celsius); ==> Number
    return (
      <div>
        {this.props.celsius >= 100
          ? "The water would boild"
          : "The water would not boild"}
      </div>
    );
  }
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired,
};

export default BoilingVerdict;
