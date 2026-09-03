import './About.css';
import image from '../../assets/image-about.png';

function About() {
  return (
    <section  id="about">
      <div className="container">
        <div className="row about-row">
          <div className="col">
            <div className="image-about">
              <img src={image} alt="Psicóloga sorrindo em seu consultório" />
            </div>
          </div>
          <div className="col">
            <p className="margin-text">CONHEÇA UM POUCO SOBRE MIM</p>
            <h3 className="margin-text">
              <strong>Olá, me chamo Aline</strong>
            </h3>
            <div className="text-about">
              <p>
                É uma alegria te receber aqui. Sou psicóloga formada há 10 anos
                e atuo sob a perspectiva da Gestalt-terapia, compreendendo o ser
                humano como alguém em constante relação com o mundo e cheio de
                possibilidades.
              </p>
              <p>
                Acredito na sua capacidade de fazer escolhas conscientes e
                conduzir sua própria vida de forma mais autêntica. Como
                psicóloga, ofereço um espaço de escuta e acolhimento para te
                auxiliar a compreender melhor suas relações e escolhas.
              </p>
              <p>
                Sou também especialista em comportamento alimentar, focada em te
                ajudar a construir uma relação de harmonia e respeito com a
                comida e consigo mesma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
