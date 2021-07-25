import React from 'react';

export default function Header() {
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
          <a href="/" className="nav-item">HOME</a>
          <a href="#team" className="nav-item">CONTATE-NOS</a>
        </nav>
      </header>
    );
  }

