import axios from 'axios';

const calls = {
  searchRequest: async (searchTerm) => {
    const result = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/search`,
      { searchTerm }
    );
    return result.data;
  }
};

export default calls;
