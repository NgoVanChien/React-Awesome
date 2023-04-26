import React from "react";
import "./Cart.scss";
// import styled from "styled-components";
import * as Styled from "./Cart.style";

export function Buttons({ isShow, className }) {
  return (
    <div className={className + " button"}>
      <button
        className="button-item"
        style={{
          backgroundColor: "yellow",
          display: isShow ? "inline-block" : "none",
        }}
      >
        Hello
      </button>
    </div>
  );
}

export default function Cart({ isShow }) {
  return (
    <Styled.ContainerExtends>
      Cart
      <Styled.StyledButtons isShow={isShow} blue />
    </Styled.ContainerExtends>
  );
}
