import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  if (isAuthenticated) return <Navigate to="/" replace={true} />;
  const handelForm = (e) => {
    e.preventDefault();
    const userLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    localStorage.setItem("credential", JSON.stringify(userLogin));
    emailRef.current.value = "";
    passwordRef.current.value = "";
    login();
    navigate("/");
  };

  return (
    <div className="min-h-[86vh] h-fit border rounded-xl p-10 text-center flex items-center text-2xl justify-center">
      <div className=" w-full h-fit  p-10 box-border rounded-lg md:w-1/2 lg:w-1/2 xl:w-1/3 border">
        <h1 className="mb-8 capitalize">Login your Account</h1>
        <form onSubmit={handelForm} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 ">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm border focus:outline-dashed focus:outline-black "
              placeholder="Email"
              type="email"
              ref={emailRef}
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              required
            />
            {/* {data?.error && <p className="text-red-400">*{data?.error}</p>} */}
          </div>
          <div className="grid grid-cols-1 gap-4 ">
            <label className="sr-only" htmlFor="email">
              Password
            </label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm border focus:outline-dashed focus:outline-black "
              placeholder="Password"
              type="password"
              ref={passwordRef}
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
              required
            />
            {/* {data?.error && <p className="text-red-400">*{data?.error}</p>} */}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 ">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-3 py-2 text-white hover:bg-slate-800"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
