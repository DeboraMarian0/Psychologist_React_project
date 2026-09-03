import './Header.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand desktop-logo" href="#banner">
            <img
              src={logo}
              alt="Logo"
              width="126"
              height="64"
              className="d-inline-block align-text-top"
            />
          </a>
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

          <a className="navbar-brand mobile-logo" href="#banner">
            <img
              src={logo}
              alt="Logo"
              width="126"
              height="64"
              className="d-inline-block align-text-top"
            />
          </a>

          <a href="#contact" className="btn-to-schedule button-header">
            Agendar <span className="hide-on-mobile">consulta</span>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#specialties">
                  Especialidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#process">
                  O Processo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
