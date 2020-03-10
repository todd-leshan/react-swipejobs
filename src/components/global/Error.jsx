import React from "react";
import PropTypes from "prop-types";

const Error = props => <p>{props.errorMsg}</p>;

Error.propTypes = {
  errorMsg: PropTypes.string.isRequired
};

export default Error;
