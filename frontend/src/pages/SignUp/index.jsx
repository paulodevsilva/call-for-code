import { useState } from 'react';
import Header from  '../../Components/HeaderDashboard';

import api from  '../../services/api';

import './styles.css'

function SignUp({ history }) {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [name, setName ] = useState('');



  async function handleSubmit(event) {
    event.preventDefault();
    console.log({history})

    // const user = await api.post('/api/users', { name, email, password, perfil: '2'});

    // console.log({user});

    history.push('/dashboard')
  }

  return (
    <>
     <Header/>
      <div className="container">
       <div className="content">
       <h1>Cadastre-se</h1>
         
       <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome *</label>
          <input
           type="text"
           id="name"
           placeholder="Digite seu nome"
           value={name}
           onChange={event => setName(event.target.value)}
           />
           
           <label htmlFor="email">Email *</label>
          <input
           type="email"
           id="email"
           placeholder="Digite seu email" 
           value={email}
           onChange={event => setEmail(event.target.value)}

           />

           <label htmlFor="password">Senha *</label>
          <input
           type="password"
           id="password"
           placeholder="Digite sua senha"
           value={password}
           onChange={event => setPassword(event.target.value)}
 
           />

           <button className="btn green" type="submit">Fazendas</button>
           <button className="btn blue" type="submit">Parceiros</button>

           
      </form>
    
       </div>
    </div>
    </>
  );
}

export default SignUp;