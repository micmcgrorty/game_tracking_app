import axios from 'axios';

const calls = {
  gameRequest: async (gameId) => {
    const result = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}/game/${gameId}`
    );
    return result.data;
  },
  gamesRequest: async (gameIds) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/game`,
      { gameIds }
    );
    return result.data;
  }
};

export default calls;
