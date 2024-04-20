import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, setOpen } = useContext(AuthContext);
  const path = [
    { name: "Home", to: "/" },
    { name: "Add Task", to: "/add" },
  ];

  return (
    <>
      <header className="  flex justify-between p-5 sm:px-10 sm:py-5 items-center rounded-md flex-wrap gap-3">
        <Link to="/" className="text-2xl uppercase">
          Task Manager
        </Link>
        <nav className=" flex flex-row gap-5 items-center justify-center">
          {path.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.to}
              className={({ isActive, isPending }) =>
                isPending
                  ? "px-3 py-1 border rounded-md border-black "
                  : isActive
                  ? "px-3 py-1 border rounded-md border-black"
                  : "px-3 py-1 border rounded-md hover:border-dashed "
              }
            >
              {nav.name}
            </NavLink>
          ))}
          {isAuthenticated ? (
            <button
              className="px-3 py-1 border rounded-md border-black hover:border-dashed"
              onClick={() => setOpen(true)}
            >
              logout
            </button>
          ) : (
            <Link
              className="px-3 py-1 border rounded-md border-black hover:border-dashed"
              to="/login"
            >
              Login
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
