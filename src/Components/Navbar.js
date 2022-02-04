import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md container-fluid navbar-colors">
      <div className="navbar-brand yellow-font" style={{ fontSize: 30 }}>
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
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="custom-nav-link"
              exact
              activeClassName="active"
              to="/home"
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
