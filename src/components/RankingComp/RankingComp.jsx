import React, { useEffect, useState } from 'react';
import "./RankingComp.scss";
import movies from "../../utils/movies.json";
import loadData from '../../utils/DataFetch';
import { useParams } from 'react-router-dom';
import MovieCard from "../MovieCard/MovieCard";
import Button from "../Button/Button";

const RankingComp = ({ trigger, setTrigger }) => {
  const [suggestionOne, setSuggestionOne] = useState(null);
  const [suggestionOneData, setSuggestionOneData] = useState(null);
  const [suggestionTwo, setSuggestionTwo] = useState(null);
  const [suggestionTwoData, setSuggestionTwoData] = useState(null);
  const [currentFavorite, setCurrentFavorite] = useState(null);
  const [currentFavoriteData, setCurrentFavoriteData] = useState(null);
  const [currentChoice, setCurrentChoice] = useState()
  const [error, setError] = useState(null);

  let { genre } = useParams();

  // Funktion zum Auswählen eines zufälligen Films
  const getRandomMovie = (genre) => {
    const keys = Object.keys(movies);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    if (genre === "all" && movies[randomKey]) {
      const randomMovie = Math.floor(Math.random() * movies[randomKey].length);
      return movies[randomKey][randomMovie];
    } else if (movies[genre]) {
      const randomMovie = Math.floor(Math.random() * movies[genre].length);
      return movies[genre][randomMovie];
    } else {
      setError('Genre not found');
      return null;
    }
  };

  // Effekt zum Laden des ersten Vorschlags
  useEffect(() => {
    setSuggestionOne(getRandomMovie(genre));
  }, [genre, trigger]);

  // Effekt zum Laden der Daten des ersten Vorschlags
  useEffect(() => {
    const fetchData = async () => {
      if (suggestionOne) {
        const data = await loadData(suggestionOne);
        if (data.error) {
          setError(data.error);
        } else {
          setSuggestionOneData(data);
        }
      }
    };

    fetchData();
  }, [suggestionOne]);

  // Effekt zum Laden des zweiten Vorschlags
  useEffect(() => {
    if (!currentFavorite) {
      setSuggestionTwo(getRandomMovie(genre));
    }
  }, [genre, trigger, currentFavorite]);

  // Effekt zum Laden der Daten des zweiten Vorschlags
  useEffect(() => {
    const fetchData = async () => {
      if (suggestionTwo) {
        const data = await loadData(suggestionTwo);
        if (data.error) {
          setError(data.error);
        } else {
          setSuggestionTwoData(data);
        }
      }
    };

    fetchData();
  }, [suggestionTwo]);

  // Effekt zum Laden der Daten des aktuellen Favoriten
  useEffect(() => {
    const fetchData = async () => {
      if (currentFavorite) {
        const data = await loadData(currentFavorite);
        if (data.error) {
          setError(data.error);
        } else {
          setCurrentFavoriteData(data);
        }
      }
    };

    fetchData();
  }, [currentFavorite]);

  // Funktion zum speichern des aktuellen Favoriten bei Klick auf Bestätigen
  const handleSave = (movie) => {
    setCurrentFavorite(movie);
    setTrigger(!trigger);
  };


  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!suggestionOneData || !suggestionTwoData || !suggestionOneData.movieData || !suggestionTwoData.movieData) {
    return <div>Loading...</div>;
  }

  const {
    Title: titleOne,
    Genre: genreOne,
    Plot: plotOne,
    Runtime: runtimeOne,
    imdbRating: ratingOne,
    Released: releasedOne,
    Poster: posterOne
  } = suggestionOneData.movieData;

  const {
    Title: titleTwo,
    Genre: genreTwo,
    Plot: plotTwo,
    Runtime: runtimeTwo,
    imdbRating: ratingTwo,
    Released: releasedTwo,
    Poster: posterTwo
  } = suggestionTwoData.movieData;

  const favoriteData = currentFavoriteData ? currentFavoriteData.movieData : {};

  const {
    Title: titleFav,
    Genre: genreFav,
    Plot: plotFav,
    Runtime: runtimeFav,
    imdbRating: ratingFav,
    Released: releasedFav,
    Poster: posterFav
  } = favoriteData;

  return (
    <div>
      {currentFavorite ? (
        <MovieCard
          img={posterFav}
          title={titleFav}
          genre={genreFav}
          plot={plotFav}
          runtime={runtimeFav}
          rating={ratingFav}
          released={releasedFav}
          setCurrentChoice={setCurrentChoice}
        />
      ) : (
        <MovieCard
          img={posterTwo}
          title={titleTwo}
          genre={genreTwo}
          plot={plotTwo}
          runtime={runtimeTwo}
          rating={ratingTwo}
          released={releasedTwo}
          setCurrentChoice={setCurrentChoice}
        />
      )}
      <MovieCard
        img={posterOne}
        title={titleOne}
        genre={genreOne}
        plot={plotOne}
        runtime={runtimeOne}
        rating={ratingOne}
        released={releasedOne}
        setCurrentChoice={setCurrentChoice}
      />

      <Button text="Bestätigen" action={() => handleSave(currentChoice)} />
    </div>
  );
};

export default RankingComp;
