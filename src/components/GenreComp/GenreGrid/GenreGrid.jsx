import React from 'react';
import "./GenreGrid.scss";
import GenreCard from "../GenreCard/GenreCard";
import movies from "../../../utils/movies.json";

const GenreGrid = (mode) => {
  // mode gibt die Info, ob es der ranking oder der random mode ist und daher welches symbol oben stehen sollte
  
  // get array of genres
  const keys = Object.keys(movies);
  console.log("Genres: ", keys);

// Select a random genre
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  console.log("Random Genre: ", randomKey);

  return (
    <div>
      <GenreCard mode={mode} />
    </div>
  )
}

export default GenreGrid
