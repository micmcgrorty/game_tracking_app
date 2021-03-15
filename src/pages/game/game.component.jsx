import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import GameCard from '../../components/game-card/game-card.component';

import GameService from '../../services/game-service';

import './game.styles.scss';

const GamePage = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [gameData, setGameData] = useState(null);
  const [gamePlatforms, setGamePlatforms] = useState(null);
  const [dateString, setDateString] = useState(null);
  const [isGameFuture, setIsGameFuture] = useState(null);
  const [relatedGames, setRelatedGames] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getGameData = async () => {
      try {
        const response = await GameService.gameRequest(id);
        setGameData(response);
        if (response.similar_games) {
          const related = await GameService.gamesRequest(
            response.similar_games
          );
          setRelatedGames(related);
        }
        setIsLoading(false);
      } catch (e) {
        setError(true);
      }
    };

    getGameData();
  }, [id]);

  useEffect(() => {
    if (!gameData) return;
    else {
      const gameTimestamp =
        new Date(gameData.first_release_date * 1000).getTime() * 1000;
      const todayTimestamp = new Date().getTime() * 1000;
      setIsGameFuture(gameTimestamp > todayTimestamp);
      setDateString(
        new Date(gameData.first_release_date * 1000).toLocaleDateString('en-GB')
      );
      const gamePlatforms = gameData.platforms
        ? gameData.platforms.map((platform) => platform.abbreviation)
        : null;
      setGamePlatforms(gamePlatforms);
    }
  }, [gameData]);

  return (
    <div className="game-page-container">
      {error && <Redirect to="/error" />}
      {isLoading && <LoadingSpinner />}
      {!isLoading && gameData && (
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
              <div className="game-data">
                {dateString !== 'Invalid Date' && (
                  <p>
                    {isGameFuture ? 'Releasing' : 'Released'} on {dateString}
                  </p>
                )}
                {gamePlatforms && <p>{gamePlatforms.join(', ')}</p>}
              </div>
            </div>
          </div>
          <hr />
          {relatedGames && (
            <>
              <h5>Similar Games</h5>
              <div className="similar-container">
                {relatedGames.map((game) => (
                  <GameCard key={game.name} game={game} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default GamePage;
