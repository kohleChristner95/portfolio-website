import React from "react";
import Navbaritem from "./Navbaritem";
import TitleHeader from "./TitleHeader";

const Navbar = (props) => {
  return (
    <nav
      style={{ backgroundColor: "rgb(29, 29, 102)" }}
      className="navbar navbar-collapse"
    >
      <div className="container-fluid navbar-brand navbar-collapse collapse">
        <Navbaritem navbarSelection="Home" />
        <Navbaritem navbarSelection="Linkedin" />
        <TitleHeader className="center-block" name="Kohle Christner" />
        <Navbaritem
          link="https://github.com/kohleChristner95"
          navbarSelection="Github"
        />
        <Navbaritem navbarSelection="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
