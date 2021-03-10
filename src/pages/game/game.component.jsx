import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import GameCard from '../../components/game-card/game-card.component';

import GameService from '../../services/game-service';

import './game.styles.scss';

const GamePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gameData, setGameData] = useState(null);
  const [relatedGames, setRelatedGames] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getGameData = async () => {
      const response = await GameService.gameRequest(id);
      setGameData(response);
      const related = await GameService.gamesRequest(response.similar_games);
      setRelatedGames(related);
      setIsLoading(false);
    };

    getGameData();
  }, [id]);

  console.log(gameData);
  console.log(relatedGames);

  return (
    <div className="game-page-container">
      {isLoading && <LoadingSpinner />}
      {!isLoading && gameData && relatedGames && (
        <>
          <div className="game-container">
            {gameData.cover && (
              <img
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${gameData.cover.image_id}.png`}
                alt={`${gameData.name} Cover`}
                className="main-image"
              />
            )}
            <div className="game-details">
              <h1>{gameData.name}</h1>
              <p>{gameData.summary}</p>
            </div>
          </div>
          <hr />
          <h5>Similar Games</h5>
          <div className="similar-container">
            {relatedGames.map((game) => (
              <GameCard key={game.name} game={game} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default GamePage;
