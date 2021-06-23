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
        <div className="tabuLinha">
          <div className="casa" data-pos='10' onClick="">{j[1][0]}</div>
          <div className="casa" data-pos='11' onClick="">{j[1][1]}</div>
          <div className="casa" data-pos='12' onClick="">{j[1][2]}</div>
        </div>
        <div className="tabuLinha">
          <div className="casa" data-pos='20' onClick="">{j[2][0]}</div>
          <div className="casa" data-pos='21' onClick="">{j[2][1]}</div>
          <div className="casa" data-pos='22' onClick="">{j[2][2]}</div>
        </div>
      </div>
    )
  }

  const verificaVitoria = () => {

    let pontos = 0
    let vitoria = false

    //linhas
    for (let l = 0; l < 3; l++) {
      pontos = 0
      for (let c = 0; c < 3; c++) {
        if (jogo[l][c] == simboloAtual) {
          pontos++
        }
      }
      if (pontos == 3) {
        vitoria = true
        break
      }
    }

    //colunas
    for (let c = 0; c < 3; c++) {
      pontos = 0
      for (let l = 0; l < 0; l++) {
        if (jogo[l][c] == simboloAtual) {
          pontos++
        }
      }
      if (pontos == 3) {
        vitoria = true
      }
    }
    
    //diagonais
    pontos = 0
    for (let d = 0; d < 3; d++) {
      if (jogo[d][d]) {
        if (jogo[d][d] == simboloAtual) {
          pontos++
        }                       
      }
    }
    if (pontos == 3) {
      vitoria = true
    }
    pontos = 0
    let l = 0
    for (let c = 2; c >= 0; c--) {
      if (jogo[l][c] == simboloAtual) {
        pontos++
      }
      l++
    }
    if (pontos == 3) {
      vitoria = true
    }

    return vitoria
  }

  const trocaJogador = () => {
    simboloAtual == 'X' ? setSimboloAtual('O') : setSimboloAtual('X')
  }

  const retPos = (e) => {
    const p = e.target.getAttribute('data-pos')
    const pos = [parseInt(p.subString(0,1)), parseInt(p.subString(1,2))]
    return pos
  }

  const verificaEspacoVazio = (e) => {
    if (jogo[retPos(e)[0]][retPos(e)[1]] == '') {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      Olá
    </>
  );
}

export default App;