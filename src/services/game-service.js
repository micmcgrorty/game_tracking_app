import apiService from '../api/api-wrapper';

const calls = {
  gameRequest: async (gameId) => {
    const result = await apiService.get(`/game/${gameId}`);
    return result.data;
  },
  gamesRequest: async (gameIds) => {
    const result = await apiService.post('/game', { gameIds });
    return result.data;
  },
  popularGamesRequest: async () => {
    const result = await apiService.get('/game/popular');
    return result.data;
  },
  newlyReleasedGamesRequest: async () => {
    const result = await apiService.get('/game/new-releases');
    return result.data;
  }
};

export default calls;
