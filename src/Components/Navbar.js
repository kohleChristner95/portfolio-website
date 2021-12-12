import React from "react";
import Navbaritem from "./Navbaritem";

const Navbar = () => {
  return (
    <div className="navbar-collapse" style={{ margin: "auto" }}>
      <Navbaritem />
      <Navbaritem />
      <Navbaritem />
    </div>
  );
};

export default Navbar;
