import React from "react";

const Navbaritem = ({ link, navbarSelection }) => {
  return (
    <a href={link} className="badge">
      {navbarSelection}
    </a>
  );
};

export default Navbaritem;
