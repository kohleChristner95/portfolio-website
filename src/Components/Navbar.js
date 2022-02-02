import { useState } from "react";

const Navbar = () => {
  const navLink = document.querySelectorAll(".custom-nav-link");
  let [currentPage, setCurrentPage] = useState("/");
  console.log(currentPage);

  for (let x = 0; x < navLink.length; x++) {
    console.log(navLink[x].text);
    if (navLink[x].text === "Contact") {
      navLink[x].ariaCurrent = "page";
      console.log("d");
      console.log(typeof navLink[x].href);
      // Getting close to figuring out selected tab. Need to find a way to set a class (highlighted + underlined) based on the current page (aria-current="page")
    }
  }

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
            <a className="custom-nav-link" href="/">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a
              className="custom-nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/kohleChristner95"
            >
              Github
            </a>
          </li>
          <li className="nav-item">
            <a className="custom-nav-link" href="/Resume">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="custom-nav-link" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
