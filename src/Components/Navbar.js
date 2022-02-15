import { NavLink } from "react-router-dom";
import { useRef } from "react";

const Navbar = () => {
  const collapseRef = useRef(null);

  const hideBars = () => {
    collapseRef.current.setAttribute('class', 'navbar-collapse collapse')
  }

  return (
    <nav className="navbar navbar-expand-md container-fluid navbar-colors navbar-light">
      <div className="navbar-brand" style={{ fontSize: 30, color: "#b9cbb0" }}>
        Kohle Christner
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collapseRef}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="custom-nav-link"
              exact
              activeClassName="active"
              to="/"
              onClick={hideBars}
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <a
              target="_blank"
              rel="noreferrer"
              className="custom-nav-link"
              exact
              activeClassName="active"
              href="https://github.com/kohleChristner95"
              onClick={hideBars}
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <NavLink
              className="custom-nav-link"
              exact
              activeClassName="active"
              to="/resume"
              onClick={hideBars}
            >
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="custom-nav-link"
              exact
              activeClassName="active"
              to="/contact"
              onClick={hideBars}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
