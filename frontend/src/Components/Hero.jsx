import React from 'react';
// import img from './Imgs/imagePresentation.png';
// import retangle from './Imgs/retanglePresentation.png';

class Hero extends React.Component {
  render() {
    return (
      <section className="hero" style={{ backgroundImage: "url(/Imgs/imageHero.png)" }}>
        <div className="hero-div" id="hero">
          <div className="hero-text">
            <h1 className="hero-title">FRASE DE EFEITO</h1>
            <p className="hero-subtitle">TEXTO TEXTO TEXTO TEXTO</p>
          </div>
        </div>
        <div className="closing-bar" />
      </section>
    );
  }
}

export default Hero;
