import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import GameCard from '../../components/game-card/game-card.component';

import GameService from '../../services/game-service';

import './homepage.styles.scss';

const HomePage = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [popularGames, setPopularGames] = useState(null);
  const [newlyReleasedGames, setNewlyReleasedGames] = useState(null);

  useEffect(() => {
    const getGameData = async () => {
      try {
        const popularResponse = await GameService.popularGamesRequest();
        setPopularGames(popularResponse);
        const newlyReleasedResponse = await GameService.newlyReleasedGamesRequest();
        setNewlyReleasedGames(newlyReleasedResponse);
      } catch (e) {
        setError(true);
      }
      setIsLoading(false);
    };

    getGameData();
  }, []);

  return (
    <div className="home-page-container">
      {error && <Redirect to="/error" />}
      {isLoading && <LoadingSpinner />}
      {!isLoading && popularGames && newlyReleasedGames && (
        <>
          <div>
            <h1>New Releases</h1>
            <div className="games-container">
              {newlyReleasedGames.map((game) => (
                <GameCard key={game.name} game={game} />
              ))}
            </div>
          </div>
          <hr />
          <div>
            <h1>Popular Games</h1>
            <div className="games-container">
              {popularGames.map((game) => (
                <GameCard key={game.name} game={game} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default HomePage;
