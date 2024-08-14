import React from 'react';

const opcoes = ['pedra', 'papel', 'tesoura'];

function decidirVencedor(escolhaJogador, escolhaCPU) {
  if (escolhaJogador === escolhaCPU) {
    return 'Empate!';
  } else if (
    (escolhaJogador === 'pedra' && escolhaCPU === 'tesoura') ||
    (escolhaJogador === 'papel' && escolhaCPU === 'pedra') ||
    (escolhaJogador === 'tesoura' && escolhaCPU === 'papel')
  ) {
    return 'Parabéns, você ganhou!';
  } else {
    return 'Você perdeu!';
  }
}

function PedraPapel({ atualizarPlacar }) {
  function escolherOpcao(escolha) {
    const escolhaCPU = opcoes[Math.floor(Math.random() * opcoes.length)];
    const resultado = decidirVencedor(escolha, escolhaCPU);
    atualizarPlacar(resultado);
  }

  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-xl font-bold mb-4">Escolha sua jogada:</h2>
      <div className="flex gap-4">
        <button
          onClick={() => escolherOpcao('pedra')}
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
        >
          👊
        </button>
        <button
          onClick={() => escolherOpcao('papel')}
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
        >
          ✋
        </button>
        <button
          onClick={() => escolherOpcao('tesoura')}
          className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
        >
          ✌
        </button>
      </div>
    </div>
  );
}

export default PedraPapel;

