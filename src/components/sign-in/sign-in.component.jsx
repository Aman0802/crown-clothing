import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "../../firebase/firebase.utils";

import "./sign-in.styles.scss";
// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { googleSignInStart } from "../../redux/user/user.actions";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   if (error.code === "auth/wrong-password") {
    //     this.setState({
    //       isError: true,
    //       message: error.message,
    //     });
    //   } else if (error.code === "auth/user-not-found") {
    //     this.setState({
    //       isError: true,
    //       message: error.message,
    //     });
    //   }
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {/* 
  //THIS CODE NEEDS TO BE REPLACED
        {this.state.isError ? (
          <div style={{ color: "red" }}>{this.state.message}</div>
        ) : null} */}

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
