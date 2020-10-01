import React, { useEffect } from "react";
import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { setCurrentUser } from "./redux/user/user.actions";
import {
  auth,
  createUserProfileDocument,
  // addCollectionAndDocuments,
} from "./firebase/firebase.utils";

import { selectCurrentUser } from "./redux/user/user.selectors";
// import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";

const App = ({ currentUser }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {}, []);

  // componentDidMount() {
  //   const { setCurrentUser /*collectionsArray*/ } = this.props;

  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //   //   // this.setState({ currentUser: user });
  //   //   // createUserProfileDocument(user);
  //   //   // console.log(user);

  //   //   if (userAuth) {
  //   //     const userRef = await createUserProfileDocument(userAuth);

  //   //     userRef.onSnapshot((snapshot) => {
  //   //       setCurrentUser({
  //   //         id: snapshot.id,
  //   //         ...snapshot.data(),
  //   //       });
  //   //     });
  //   //   } else {
  //   //     setCurrentUser(userAuth);
  //   //   }
  //   //   // addCollectionAndDocuments(
  //   //   //   "collections",
  //   //   //   collectionsArray.map(({ title, items }) => ({ title, items }))
  //   //   // );
  //   // });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signIn"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
