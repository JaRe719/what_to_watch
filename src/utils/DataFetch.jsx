const fetchMovieData = async (title) => {
    const url = `https://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_API_KEY}&`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  const loadData = async (title) => {
    try {
      const movieData = await fetchMovieData(title);
  
      return {
        movieData: movieData
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { error: error.message };
    }
  };
  
  export default loadData;
  