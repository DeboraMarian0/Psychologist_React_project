import './Banner.css';
import image from '../../assets/banner.png';

function Banner() {
  return (
    <section  id="banner">
      <div className="container">
        <div className="row inverted-content">
          <div className="col">
            <p className="margin-text">ATENDIMENTO ONLINE E PRESENCIAL</p>
            <h1 className="margin-text">
              Há encontros que mudam a vida. <br />
              <strong>A terapia é, antes de tudo, um encontro com você.</strong>
            </h1>
            <p className="margin-text">
              Se fizer sentido para você, eu posso te acompanhar nesse caminho,
              com presença, escuta e acolhimento.
            </p>
            <a href="#contact" className="btn-to-schedule ">
              Quero iniciar minha jornada
            </a>
          </div>
          <div className="col">
            <div className="image-banner">
              <img
                src={image}
                alt="Psicóloga sorrindo em um campo de girassóis"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
