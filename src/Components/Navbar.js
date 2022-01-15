import Resume from "./Resume";
import Home from "./Home";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav
      style={{ backgroundColor: "rgb(29, 29, 102)" }}
      className="navbar navbar-expand-md container-fluid"
    >
      <div className="navbar-brand" style={{ fontSize: 30 }}>
        Kohle Christner
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/Home">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kohleChristner95"
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Resume">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a href="./Contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
