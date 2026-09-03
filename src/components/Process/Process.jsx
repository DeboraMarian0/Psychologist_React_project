import './Process.css';
import { useRef } from 'react';
import imageClickLeft from '../../assets/Icon-arrow-left.svg';
import imageClickRight from '../../assets/Icon-arrow-right.svg';
import imageProcess from '../../assets/image-process.png';

function Process() {
  // substitui o document.getElementById('carrossel') do JS
  const carouselRef = useRef(null);

  //funções adaptadas para o padrão React
  const clickRight = () => {
    // O if garante que o elemento já carregou na tela antes de tentar rolar
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 320;
    }
  };
  // o current é o equivalente exato ao que o getElementById retornaria
  const clickLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 320;
    }
  };

  return (
    <section id="process">
      <div className="container">
        <div className="container-carousel">
          <div className="d-flex align-items-center container-text">
            <div className="col-text">
              <h3>
                Como posso te <br />
                acompanhar
              </h3>
              <p>
                Ofereço um espaço de escuta, acolhimento e cuidado para que você
                compreenda melhor a forma como se relaciona consigo, com os
                outros e com o mundo ao seu redor. Meu objetivo é ajudar você a
                construir, com gentileza, uma vida com mais autonomia e escolhas
                autênticas.
              </p>
              {/* BOTÕES DO DESKTOP  */}
              <div className="button-carousel desktop-buttons">
                <button className="btn-scroll" onClick={clickLeft}>
                  <img src={imageClickLeft} alt="seta para a esquerda" />
                </button>

                <button className="btn-scroll" onClick={clickRight}>
                  <img src={imageClickRight} alt="seta para a direita" />
                </button>
              </div>
            </div>
            {/* o ref é como se disesse para o React, assim que você renderizar essa div na tela, guarde ela dentro da minha caixa "carouselRef" */}
            <div className="carousel-cards" id="carousel" ref={carouselRef}>
              <div className="card-item light-color">
                <h3>Comportamento alimentar</h3>
                <p>
                  Construção de uma relação de harmonia, consciência e respeito
                  com a alimentação e consigo mesma.
                </p>
              </div>

              <div className="card-item dark-color">
                <h3>Autoestima</h3>
                <p>
                  Reconhecimento de seus recursos, limites e potencialidades
                  para viver com mais presença e autoconfiança.
                </p>
              </div>

              <div className="card-item light-color">
                <h3>Relacionamentos</h3>
                <p>
                  Ampliação da consciência sobre padrões de relacionamentos
                  disfuncionais, possibilitando a construção de vínculos mais
                  saudáveis.
                </p>
              </div>

              <div className="card-item dark-color">
                <h3>Traumas</h3>
                <p>
                  Acolhimento de experiências difíceis para fortalecer recursos
                  internos, promovendo bem-estar e integração.
                </p>
              </div>
            </div>

            {/* BOTÕES DO MOBILE */}
            <div className="button-carousel mobile-buttons">
              <button className="btn-scroll" onClick={clickLeft}>
                <img src={imageClickLeft} alt="seta para a esquerda" />
              </button>
              <button className="btn-scroll" onClick={clickRight}>
                <img src={imageClickRight} alt="seta para a direita" />
              </button>
            </div>
          </div>
        </div>

        <div className="row process-row">
          <div className="col process-content">
            <h3 className="title-process">
              <strong>Como caminhamos juntos</strong>
            </h3>
            <p className="introductory-text-process">
              A terapia é um trabalho em dupla, onde construímos o processo
              passo a passo.
            </p>
            <div className="list-process">
              <div className="item-process">
                <span className="number-process">1</span>
                <div className="text-process">
                  <h4>O nosso primeiro encontro</h4>
                  <p>
                    É um espaço para nos conhecermos. Quero entender o que
                    trouxe você até aqui, enquanto você sente como é a nossa
                    conexão e conhece minha forma de trabalho. Ao final,
                    decidimos juntos se faz sentido iniciar sua jornada
                    terapêutica.
                  </p>
                </div>
              </div>

              <div className="item-process">
                <span className="number-process">2</span>

                <div className="text-process">
                  <h4>O processo terapêutico</h4>
                  <p>
                    Caminhamos lado a lado, inicialmente com encontros semanais
                    para fortalecer nosso vínculo. Criamos um espaço seguro para
                    compreender suas demandas e sentimentos, trabalhando cada
                    questão de forma gradual e cuidadosa.
                  </p>
                </div>
              </div>

              <div className="item-process">
                <span className="number-process">3</span>

                <div className="text-process">
                  <h4>Autonomia e novos ritmos</h4>
                  <p>
                    A decisão de finalizar o processo é sempre sua, respeitando
                    seu tempo e escolhas. Estarei ao seu lado para sinalizar
                    seus progressos e ajudar a perceber o momento de espaçar as
                    sessões para quinzenais ou mensais, sempre no seu tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col process-image">
            <img src={imageProcess} alt="Psicóloga sorrindo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
