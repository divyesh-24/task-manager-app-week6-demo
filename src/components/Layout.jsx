import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "./Modal";
import { AuthContext } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      {children}
      <Footer />
      <Modal
        title="Are You Sure to Logout?"
        description=""
        buttonTitle="Logout"
        funcModal={logout}
      />
    </div>
  );
};

export default Layout;
