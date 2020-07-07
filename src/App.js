import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.actions'

import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
            <Route exact path='/signin' component={SignInAndSignUp}/>
          </Switch>
      </div>
    );  
  }
}

const mapDispatchToProps = dispatch => {
  setCurrentUser: user => dispatch(setCurrentUser(user));
}

export default connect(null, mapDispatchToProps)(App);