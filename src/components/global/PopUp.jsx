import React from "react";
import PropTypes from "prop-types";

const PopUp = props => {
  const { data, showPopup, title, onCloseClick } = props;

  return (
    <div className={`pop-up ${showPopup ? "" : "hidden"}`}>
      <h3>{title}</h3>
      <button className="btn btn--close" onClick={onCloseClick}>
        Close
      </button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className="btn btn--white btn--close" onClick={onCloseClick}>
        Close
      </button>
    </div>
  );
};

PopUp.propTypes = {
  showPopup: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCloseClick: PropTypes.func.isRequired
};

export default PopUp;
