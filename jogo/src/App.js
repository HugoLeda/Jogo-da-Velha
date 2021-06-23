import {useState} from 'react'

function App() {

  const jogoInicial = [['', '', ''], ['', '', ''], ['', '', '']]
  const [jogo, setJogo] = useState(jogoInicial)
  const [simboloAtual, setSimboloAtual] = useState('X')
  const [jogando, setJogando] = useState(true)

  const tabuleiro = (j) => {
    return (
      <div className="tabu">
        <div className="tabuLinha">
          <div className="casa" data-pos='00' onClick="">{j[0][0]}</div>
          <div className="casa" data-pos='01' onClick="">{j[0][1]}</div>
          <div className="casa" data-pos='02' onClick="">{j[0][2]}</div>
        </div>
      </div>
    )
  }

  return (
    <>
      Olá
    </>
  );
}

export default App;