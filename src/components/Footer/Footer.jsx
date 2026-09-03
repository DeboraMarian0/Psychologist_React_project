import './Footer.css';
import logoFooter from '../../assets/logo-footer.svg';
import iconArrow from '../../assets/icon-arrow.png';

function Footer() {
  //função que força a rolagem para o topo
  const backToTop = (e) => {
    e.preventDefault(); // Impede que o navegador tente mudar a URL
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Garante que a subida seja suave
    });
  };
  return (
    <footer className="footer">
      <div className="container">
        <div className="img-footer">
          <a href="#banner">
            <img
              src={logoFooter}
              alt="Logo"
              width="126"
              height="64"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>

        <div className="nav-footer">
          <ul className="navbar-nav">
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

        <div className="text-footer">
          <p className="paragraph-footer">
            © 2026 Aline Alves CRP 12/14646.
            <br className="line-break" />
            Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://www.linkedin.com/in/debora-mariano-1776868a/"
              target="_blank"
            >
              Debora Mariano
            </a>
          </p>
        </div>

        <div className="container-back-top">
          <a className="btn-back" onClick={backToTop}>
            <span className="arrow-back">
              <img
                src={iconArrow}
                alt="seta para cima que ao ser clicado volta ao topo"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
