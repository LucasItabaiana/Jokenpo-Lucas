import React, { useState } from 'react';
import Controles from './components/Controles/controles';
import PedraPapel from './components/PedraPapel/pedrapapel';
import Placar from './components/Placar/placar';

function App() {
  const [pontuacaoJogador, setPontuacaoJogador] = useState(0);
  const [pontuacaoComputador, setPontuacaoComputador] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  function atualizarPlacar(resultado) {
    if (resultado === 'Parabéns, você ganhou!') {
      setPontuacaoJogador(pontuacaoJogador + 1);
    } else if (resultado === 'Você perdeu!') {
      setPontuacaoComputador(pontuacaoComputador + 1);
    } else if (resultado === 'Empate!') {
      setEmpates(empates + 1);
    }
  }

  function resetarJogo() {
    setPontuacaoJogador(0);
    setPontuacaoComputador(0);
    setEmpates(0);
    setJogoFinalizado(false);
  }

  function finalizarJogo() {
    setJogoFinalizado(true);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <Placar 
          pontuacaoJogador={pontuacaoJogador} 
          pontuacaoComputador={pontuacaoComputador} 
          empates={empates} 
        />

        {!jogoFinalizado ? (
          <PedraPapel atualizarPlacar={atualizarPlacar} />
        ) : (
          <h2 className="text-xl font-bold text-center mt-6">Fim de Jogo</h2>
        )}

        <Controles onReset={resetarJogo} onEndGame={finalizarJogo} />
      </div>
    </div>
  );
}

export default App;
