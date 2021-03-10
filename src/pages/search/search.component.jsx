import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';
import GameCard from '../../components/game-card/game-card.component';

import SearchService from '../../services/search-service';

import './search.styles.scss';

const SearchPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const onSearchSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const searchResultsResponse = await SearchService.searchRequest(searchTerm);
    setSearchResults(searchResultsResponse);
    setIsLoading(false);
  };

  console.log(searchResults);

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
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <hr />
      <div className="search-results">
        {isLoading && <LoadingSpinner />}
        {!isLoading &&
          searchResults &&
          searchResults.length > 0 &&
          searchResults.map((game) => <GameCard key={game.name} game={game} />)}
        {!isLoading && searchResults && searchResults.length === 0 && (
          <p>Sorry, there were no results.</p>
        )}
      </div>
    </div>
  );
};
export default SearchPage;
