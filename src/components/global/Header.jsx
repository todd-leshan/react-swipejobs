import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import get from "lodash/get";

import sitelogo from "../../assets/site-logo.png";

const mapStateToProps = state => ({
  isUserLoaded: state.isUserLoaded,
  user: state.user
});

const Header = props => {
  let userName = "";

  if (props.isUserLoaded) {
    userName = `${get(props.user, "firstName")} ${get(props.user, "lastName")}`;
  }

  return (
    <header>
      <a href="https://www.swipejobs.com/" className="link link__logo">
        <img src={sitelogo} alt="swipejobs site logo" />
      </a>
      <Link to="#" className="link link__profile">
        {userName}
      </Link>
    </header>
  );
};

export default connect(mapStateToProps)(Header);
