import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) return <Navigate to="/" replace={true} />;
  return (
    <div className="min-h-[86vh] h-fit border rounded-xl p-10 text-center flex items-center text-2xl justify-center">
      Please Login First!!!
    </div>
  );
};

export default Login;
