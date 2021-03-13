import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import GameCard from '../../components/game-card/game-card.component';
import Button from '../../components/button/button.component';

import SearchService from '../../services/search-service';

import './search.styles.scss';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(false);
  const onSearchSubmit = async (e) => {
    setIsLoading(true);
    setError(false);
    e.preventDefault();

    try {
      const searchResultsResponse = await SearchService.searchRequest(
        searchTerm
      );
      setSearchResults(searchResultsResponse);
    } catch (e) {
      setError(true);
      setSearchResults(null);
    }
    setIsLoading(false);
  };

  return (
    <div className="search-container">
      <div className="search-form">
        <h1 className="search-header">Search for a game</h1>
        <form onSubmit={(e) => onSearchSubmit(e)}>
          <FormInput
            label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            required
          />
          <Button label="Submit" type="submit" />
        </form>
      </div>
      <hr />
      <div className="search-results">
        {isLoading && <LoadingSpinner />}
        {error && <p>Sorry, there's been an error. Please try again.</p>}
        {!isLoading &&
          searchResults &&
          searchResults.length > 0 &&
          searchResults.map((game) =>
            game.first_release_date && game.cover ? (
              <GameCard key={game.name} game={game} />
            ) : null
          )}
        {!isLoading && searchResults && searchResults.length === 0 && (
          <p>Sorry, there were no results.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
