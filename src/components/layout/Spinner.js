import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
  <Fragment>
    <img src={spinner} alt="loading..." style={imgStyle} />
  </Fragment>
);

const imgStyle = {
  display: "block",
  width: "200px",
  margin: "auto"
};

export default Spinner;
