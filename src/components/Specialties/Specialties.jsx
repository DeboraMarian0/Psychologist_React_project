import './Specialties.css';

function Specialties() {
  return (
    <section id="specialties">
      <div className="container">
        <div className="title-specialties text-center">
          <p className="subtitle-specialties">COMO TRABALHAMOS NAS SESSÕES</p>
          <h3 className="main-title-specialties">
            <strong>O que é a Gestalt-terapia?</strong>
          </h3>
          <p className="description-specialties">
            Mais do que uma abordagem psicológica, a Gestalt-terapia é uma forma
            de compreender o ser humano como alguém em constante relação com o
            mundo, com foco no presente e na experiência.
          </p>
        </div>

        <div className="cards-specialties">
          <div className="card-specialtie light">
            <h4>
              O aqui <br /> e agora
            </h4>
            <p>
              Trazemos para o presente questões que causam sofrimento,
              permitindo que você identifique emoções e faça escolhas de formna
              mais consciente e espontânea.
            </p>
          </div>

          <div className="card-specialtie medium">
            <h4>
              O que faz <br /> sentido para você
            </h4>
            <p>
              Acredito que ninguém sabe mais de você do que você mesma. Meu
              papel não é te explicar ou rotular, mas sim compreender o que faz
              sentido para você a partir do que é compartilahdo em sessão.
            </p>
          </div>

          <div className="card-specialtie medium">
            <h4>
              Um trabalho <br /> em dupla
            </h4>
            <p>
              A terapia depende da qualidade do nosso encontro. É um espaço
              seguro, sem julgametos, onde caminhamos juntas para fortalecer seu
              autoconhecimento e sua capacidade de apoiar-se em sim mesma.
            </p>
          </div>

          <div className="card-specialtie dark">
            <h4>
              Relação de <br /> Autenticidade
            </h4>
            <p>
              O foco é ajudar você a compreender como se ralaciona consigo e com
              o mundo, promovendo o resgate da sua espontaneidade e autonomia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialties;
