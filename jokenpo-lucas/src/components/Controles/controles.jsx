import React from 'react';

function Controles({ onReset, onEndGame }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={onReset}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Jogar Novamente
      </button>
      <button
        onClick={onEndGame}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Encerrar
      </button>
    </div>
  );
}

export default Controles;

