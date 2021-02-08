import React from "react";
import './App.css';
import { useState } from "react";


const App = props => {
  const [nome, setNome] = useState('');

  function getEvent(ev) {
    const { value } = ev.target;
    setNome(value);
  }
  return (
    <>
      <h1>Hello {nome}!</h1>
      Nome: <input type="text" name="nome" value={nome} onChange={e => getEvent(e)} />
    </>
  );
}

export default App