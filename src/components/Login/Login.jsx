import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../../Firebase/firebase.init";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(" print", email, password);

    //reset error message:
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (!result.user.emailVerified) {
          alert("Please verify your mail");
        }
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    console.log("Forget password", email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check the email to rest password");
      })
      .catch();
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  ref={emailRef}
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div onClick={handleForgetPassword}>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              {error && <p className="text-red-500">{error}</p>}
            </form>
            <p>
              New in the website? Please{" "}
              <Link className="text-blue-500 underline" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
