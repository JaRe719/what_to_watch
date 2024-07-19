import React, { useEffect, useState } from 'react';
import "./ChanceLogic.scss";
import movies from "../../../utils/movies.json";
import loadData from '../../../utils/DataFetch';
import { useParams } from 'react-router-dom';
import MovieCard from "../../MovieCard/MovieCard";


const ChanceLogic = ({ trigger }) => {
  const [suggestion, setSuggestion] = useState(null);
  const [suggestionData, setSuggestionData] = useState(null);
  const [error, setError] = useState(null);

  let { genre } = useParams();

  useEffect(() => {
    
    // Select a random genre
    const keys = Object.keys(movies);
    console.log("Genres: ", keys);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    console.log("Random Genre: ", randomKey);

    if (genre === "all" && movies[randomKey]) {
      const randomMovie = Math.floor(Math.random() * movies[randomKey].length);
      const suggest = movies[randomKey][randomMovie];
      console.log("suggest: ", suggest);
      console.log("randomMovie: ", randomMovie);

      setSuggestion(suggest);
    } else if (movies[genre]) {
      const randomMovie = Math.floor(Math.random() * movies[genre].length);
      const suggest = movies[genre][randomMovie];
      console.log("suggest: ", suggest);
      console.log("randomMovie: ", randomMovie);

      setSuggestion(suggest);
    } else {
      setError('Genre not found');
    }
  }, [genre, trigger]);

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

  if (!suggestionData || !suggestionData.movieData) {
    return <div>Loading...</div>;
  }

  const { Title, Genre, Plot, Runtime, imdbRating, Released, Poster } = suggestionData.movieData;

  return (
    <div>
      <MovieCard 
        img={Poster}
        title={Title}
        genre={Genre}
        plot={Plot}
        runtime={Runtime}
        rating={imdbRating}
        released={Released}
        setCurrentChoice={""}
      />
    </div>
  );
}

export default ChanceLogic;
