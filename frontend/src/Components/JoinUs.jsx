import React from 'react';

export default function JoinUs(props) {
  const {navigate} = props;
  const handleNavigate = (event) => {
    navigate.push('/signup')
  }
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
              <p>Faça a compensação de créditos de carbono e ajude o meio ambiente.</p>
          </div>
          <div className="farmers">
              <h3>PARCEIROS</h3>
              <img src={"./Imgs/imgPartner.png"} alt="parceiros" />
              <p>Ajude a impactar positivamente na sua vida e de outras pessoas.</p>
          </div>
          </div>
          <div className="join-us-text">
           Com você, somos mais fortes!  Contribua para um planeta melhor
          </div>
          <button className="join-us-button" onClick={handleNavigate}>Junte-se a nós</button>
        </div>
      </section>
    );
  }

