import { useState } from 'react';
import { Link } from  'react-router-dom'
import './styles.css';

import cards from './data';

export default function Dashboard() {
  let [dropdown, setDropdown] = useState(false);
  
  const eventslist = [
  {id: 1, name: 'Fazenda três rios'},
  {id: 2, name: 'Sitio São Jośe'},
  {id: 3, name: 'Chacara recanto dos pardais'},
  {id: 4, name: 'Fazendo Ouro Preto'},
  {id: 5, name: 'Sitio Maria Jośe'},
  {id: 6, name: 'Chacara das aves'},
  {id: 7, name: 'Fazenda Dom Pedro II'},
  {id: 8, name: 'Sitio do Pica-pau amarelo'},
  {id: 9, name: 'Fazenda Visconde de Sabugosa'},
  {id: 10, name: 'Fazenda Rio Negro'}
]

 function changeModal() {
   if (!dropdown) {
     return setDropdown(true);
   }
   return setDropdown(false)

  }

  const Modal = () => {
    return (
      <>
        <div
      hidden={!dropdown}  
    >
      <div
        className="modal-background"
        onClick={changeModal}
      >
        <div className="modal-card">
          <ul style={{ paddingTop: "20px"}}>
            {eventslist.map(item => (
              <li key={item.id}>
                <strong className="textItem">{item.name}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      </>
    );
  }


  return (
    <>
       <header className="header">
        <a href="#hero" className="header-a-home">
          <div className="div-logo">
            <img src={"./Imgs/logo.png"} alt="logo" className="logo-img" />
            <h2>SEMEAR</h2>
         </div>
        </a>
        <nav>
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/" className="nav-item">PERFIL</Link>
          <Link to="/" className="nav-item">FAZER UMA DOAÇÃO</Link>
          <Link to="/" className="nav-item">MINHA CONTA</Link>
          <span className="line"></span>
          <Link to="/" className="nav-item">MINHAS DOAÇÕES</Link>

        </nav>
      </header>
      <div className="container-dashboard">
        <div className="content-dashboard">
              <input
               type="text"
               id="location"
               placeholder="Corinto - MG"
               />
                
              <ul className="card-list">
                {cards.map(card => (
                  <li key={card.id}>
                    <header style={{ backgroundImage: `url(${card.image})` }} onClick={changeModal}/>
                    <strong>{card.title}</strong>
                    <Modal/>

                  </li>
                ))}
              </ul>
        </div>
     </div>
    </>
  );
}

