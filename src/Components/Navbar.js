import React from "react";
import Navbaritem from "./Navbaritem";

const Navbar = () => {
  return (
    <nav className="navbar navbar-collapse">
      <div className="container-fluid navbar-brand">
        <Navbaritem navbarSelection="Home" />
        <Navbaritem navbarSelection="Linkedin" />
        <Navbaritem navbarSelection="Github" />
        <Navbaritem navbarSelection="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
