import React from 'react';
import ChessPiece from './ChessPiece';

const PromotionModal = ({ color, onPieceSelect }) => {
  const pieces = ['queen', 'rook', 'bishop', 'knight'];

  return (
    <div className="promotion-modal">
      <h3>Promote to:</h3>
      <div className="promotion-options">
        {pieces.map((piece) => (
          <button key={piece} onClick={() => onPieceSelect(piece)}>
            <ChessPiece piece={`<span class="math-inline">\{color\}</span>{piece}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromotionModal;