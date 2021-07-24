import React from 'react';
import img from './Imgs/imagePresentation.png';
import retangle from './Imgs/retanglePresentation.png';

class Presentation extends React.Component {
  render() {
    return (
      <section className="presentation-container">
        <img src={ img } alt="Foto de um rio" className="presentation-img"/>
        <img src={ retangle } alt="retângulo" className="retangle" />
        <div className="presentation-text">
          <h1 className="presentation-title">FRASE DE EFEITO</h1>
          <p className="presentation-subtitle">TEXTO TEXTO TEXTO TEXTO</p>
        </div>
        <div className="closing-bar" />
      </section>
    );
  }
}

export default Presentation;
