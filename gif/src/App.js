import React, { useState } from 'react'
import Gif from './components/gif'

function App() {

  const [mostrarGif, adicionarGif] = useState(false)

  const mostrar =()=> {
    adicionarGif(true)
  }

  const esconder =()=> {
    adicionarGif(false)
  }
  return (
    <>
      <div>
        <button onClick={mostrar}>Surpresa!!!</button>
        {mostrarGif && <Gif />}
      </div>
      <>
        {mostrarGif && <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="Gif" onClick={esconder}/>}
        
        </>
    </>
  );
}

export default App;
