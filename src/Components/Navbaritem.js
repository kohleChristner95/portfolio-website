import React from "react";

const Navbaritem = (props) => {
  return (
    <a href={props.link} className="badge">
      {props.navbarSelection}
    </a>
  );
};

export default Navbaritem;
