import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
