import React from 'react';

function Placar({ pontuacaoJogador, pontuacaoComputador, empates }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold mb-4 text-black">Placar</h2>
      <p className="font-bold text-black">Jogador: {pontuacaoJogador}</p>
      <p className="font-bold text-black">Computador:{pontuacaoComputador}</p>
      <p className="font-bold text-black">Empates:{empates}</p>
    </div>
  );
}

export default Placar;
