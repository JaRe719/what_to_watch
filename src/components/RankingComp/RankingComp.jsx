import React, { useEffect, useState } from 'react';
import "./RankingComp.scss";
import movies from "../../utils/movies.json";
import loadData from '../../utils/DataFetch';
import { useParams } from 'react-router-dom';

const RankingComp = () => {
  const [suggestion, setSuggestion] = useState(null);
  const [suggestionData, setSuggestionData] = useState(null);
  const [error, setError] = useState(null);

  let { genre } = useParams();

  useEffect(() => {
    if (movies[genre]) {
      const randomMovie = Math.floor(Math.random() * movies[genre].length);
      const suggest = movies[genre][randomMovie];
      console.log("suggest: ", suggest);
      console.log("randomMovie: ", randomMovie);

      setSuggestion(suggest);
    } else {
      setError('Genre not found');
    }
  }, [genre]);

  useEffect(() => {
    const fetchData = async () => {
      if (suggestion) {
        console.log("Fetching data for suggestion:", suggestion);
        const data = await loadData(suggestion);
        if (data.error) {
          setError(data.error);
        } else {
          console.log("Data fetched successfully:", data);
          setSuggestionData(data);
        }
      }
    };

    fetchData();
  }, [suggestion]);

  console.log("movies: ", movies);
  console.log("genre: ", genre);
  console.log("suggestionData: ", suggestionData);
  console.log("suggestion: ", suggestion);
  console.log("error: ", error);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!suggestionData) {
    return <div>Loading...</div>;
  }


  const { Title, Genre, Plot, Runtime, imdbRating, Released, Poster } = suggestionData.movieData;

  return (
    <div className="ranking-comp">
      <h1>Suggested Movie</h1>
      <img src={Poster} alt={Title} />
      <p>Title: {Title}</p>
      <p>Genre: {Genre}</p>
      <p>Plot: {Plot}</p>
      <p>Runtime: {Runtime}</p>
      <p>IMDB Rating: {imdbRating}</p>
      <p>Released: {Released}</p>
    </div>
  );
};

export default RankingComp;
