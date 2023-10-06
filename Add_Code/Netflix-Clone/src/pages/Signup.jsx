import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import background from "../images/netflix-background.jpg";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  //set email state to empty string
  const [email, setEmail] = useState("");
  //set password state to empty string
  const [password, setPassword] = useState("");
  //creates context object to set the user state
  const { user, signUp } = UserAuth();
  //variable for react router navigation function
  const navigate = useNavigate();

  //async event handler arrow function to return a promise
  const handleSubmit = async (e) => {
    //prevents form from submitting multiple times
    e.preventDefault();
    //attempt code block
    try {
      //await to pause the execution and wait for a resolved email & password promise from signup function before it continues
      await signUp(email, password);
      //navigate to home page after promise is resolved
      navigate("/");
      //handle any error
    } catch (error) {
      //console log error if any
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={background}
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
              {/* input form with event handler to execute on submit */}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  //sets text value to state
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  //sets text value to state
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-400">
                    Already subscribed to Netflix?
                  </span>{" "}
                  {/* link to login */}
                  <Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
