import React from 'react';

import './game-card.styles.scss';

const GameCard = ({ game }) => (
  <div className="game-card">
    <h6>{game.name}</h6>
  </div>
);

export default GameCard;
