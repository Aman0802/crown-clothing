import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

//higher order function that helps us have access to the things related to redux
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
// _______________________________________________________________conflict______________________________________________________________________

// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// })

// //connect is a higher order funcrion and takes 2 arguments, 2nd being optional. 1st arg is a Function that allows us to access state
// export default connect(mapStateToProps)(Header);
