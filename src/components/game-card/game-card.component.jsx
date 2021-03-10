import React from 'react';

import './game-card.styles.scss';

const GameCard = ({ game }) => (
  <a href={`/game/${game.id}`} className="game-card">
    {game.cover && (
      <img
        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.png`}
        alt={`${game.name} Cover`}
        className="cover-image"
      />
    )}
    <h5>{game.name}</h5>
  </a>
);

export default GameCard;
