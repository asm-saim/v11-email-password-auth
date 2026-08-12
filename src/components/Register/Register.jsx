import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../Firebase/firebase.init";
import { useState } from "react";

const Register = () => {
  //state declare:
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("Submission completed", email, password);

    //reset state:
    setError("");
    setSuccess(false);

    //regEx: regular expression
    // const passwordRegex = /^.{6,}$/;
    // if (!passwordRegex.test(password)) {
    //   console.log("Password didn't match");
    //   setError("Password must be 6 or more character");
    //   return;
    // }

    // //for upperLowerCaseAndCharacter:
    // const upperLowerCaseAndCharacter = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    // if (!upperLowerCaseAndCharacter.test(password)) {
    //   console.log("Password must have one upper and one lowercase");
    //   setError("Password must have one upper and one lowercase");
    //   return;
    // }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one special character.",
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("After creation of a new user: ", result.user);
        setSuccess(true);
        event.target.reset();
      })
      .catch((error) => {
        console.log("Error message is :", error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              {success && (
                <p className="text-green-500">Account created Successfully</p>
              )}
              {error && <p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
