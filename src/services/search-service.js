import apiService from '../api/api-wrapper';

const calls = {
  searchRequest: async (searchTerm) => {
    const result = await apiService.post('/search', { searchTerm });
    return result.data;
  }
};

export default calls;
