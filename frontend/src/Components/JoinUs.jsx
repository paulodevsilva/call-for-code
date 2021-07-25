import React from 'react';

export default function JoinUs({history}) {
  
    return (
      <section className="join-us-section" id="join">
        <div className="join-us-img" style={{ backgroundImage: "url(/Imgs/imageJoin.png)" }}>
          <h1 className="join-us-title">Junte-se a nós</h1>
          <div className="join-us-subtitle-box">
            <div className="join-us-detail-subtitle" />
            <h2 className="join-us-subtitle">Colabore para o reflorestamento de áreas degradadas</h2>
          </div>
        </div>
        <div className="join-us-body">
          <div className="join-us-partners">
            <div className="farmers">
              <h3>ÁREAS RURAIS</h3>
              <img src={"./Imgs/imgFarm.png"} alt="fazenda" />
              <p>Aumente sua renda disponibilizando uma parte do seu terreno.</p>
            </div>
          <div className="farmers">
              <h3>INDÚSTRIAS</h3>
              <img src={"./Imgs/imgIndustry.png"} alt="indústria" />
              <p>Aumente a valorização da sua propriedade.</p>
          </div>
          <div className="farmers">
              <h3>PARCEIROS</h3>
              <img src={"./Imgs/imgPartner.png"} alt="parceiros" />
              <p>Ajude a impactar positivamente na sua vida e de outras pessoas.</p>
          </div>
          </div>
          <div className="join-us-text">
            frase de efeito xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
          <button className="join-us-button">Junte-se a nós</button>
        </div>
      </section>
    );
  }

