import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        {/* <h1 className="logo-img">LOGO</h1> */}
        <a href="#hero" className="header-a-home">
          <div className="div-logo">
            <img src={"./Imgs/logo.png"} alt="logo" className="logo-img" />
            <h2>SEMEAR</h2>
         </div>
        </a>
        <nav>
          <a href="#about" className="nav-item">O QUE FAZEMOS</a>
          <a href="#benefits" className="nav-item">BENEFÍCIOS</a>
          <a href="#join" className="nav-item">JUNTE-SE A NÓS</a>
          <a href="#team" className="nav-item">CONTATE-NOS</a>
        </nav>
      </header>
    );
  }
}

export default Header;
