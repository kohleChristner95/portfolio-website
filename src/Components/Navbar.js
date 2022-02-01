const Navbar = () => {
  const navbarText = document.querySelectorAll(".nav-link");

  const mouseHover = () => {
    for (let x = 0; x < 4; x++) {
      console.log(navbarText[x]);
    }
  };

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
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a
              className="nav-link"
              onMouseEnter={() => mouseHover()}
              // onMouseLeave={() => mouseLeave()}
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
            <a className="nav-link" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
