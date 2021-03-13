import React from 'react';
import PropTypes from 'prop-types';

import './game-card.styles.scss';

const GameCard = ({ game }) => {
  const gameTimestamp =
    new Date(game.first_release_date * 1000).getTime() * 1000;
  const todayTimestamp = new Date().getTime() * 1000;
  const isGameFuture = gameTimestamp > todayTimestamp;
  const dateString = new Date(
    game.first_release_date * 1000
  ).toLocaleDateString('en-GB');
  const gamePlatforms = game.platforms
    ? game.platforms.map((platform) => platform.abbreviation)
    : null;

  return (
    <a href={`/game/${game.id}`} className="game-card">
      <img
        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.png`}
        alt={`${game.name} Cover`}
        className="cover-image"
      />
      <h3 className="game-title">{game.name}</h3>
      {dateString !== 'Invalid Date' && (
        <p className="game-data">
          {isGameFuture ? 'Releasing' : 'Released'} on {dateString}
        </p>
      )}
      {gamePlatforms && <p className="game-data">{gamePlatforms.join(', ')}</p>}
    </a>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    first_release_date: PropTypes.number,
    name: PropTypes.string,
    gamePlatforms: PropTypes.array
  }).isRequired
};

export default GameCard;
