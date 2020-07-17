import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

//higher order function that helps us have access to the things related to redux
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon/>
    </div>
    {
      !hidden? <CartDropdown />: null
    }
    {/* <CartDropdown /> */}
  </div>
);

const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);

// //connect is a higher order funcrion and takes 2 arguments, 2nd being optional. 1st arg is a Function that allows us to access state
