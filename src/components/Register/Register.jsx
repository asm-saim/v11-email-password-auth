import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../Firebase/firebase.init";
import { useState } from "react";

const Register = () => {
  //state declare:
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("Submission completed", email, password);

    //empty error state:
    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("After creation of a new user: ", result.user);
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
              {<p className="text-red-500">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
