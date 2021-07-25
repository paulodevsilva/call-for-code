import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <h1 className="logo-img">LOGO</h1>
        <nav>
          <a href="http://www.google.com" className="nav-item">HOME</a>
          <a href="http://www.google.com" className="nav-item">O QUE FAZEMOS</a>
          <a href="http://www.google.com" className="nav-item">BENEFÍCIOS</a>
          <a href="http://www.google.com" className="nav-item">CONTATE-NOS</a>
        </nav>
      </header>
    );
  }
}

export default Header;
