import React from 'react';
import "./GenreGrid.scss";
import GenreCard from "../GenreCard/GenreCard";
import movies from "../../../utils/movies.json";

// Funktion zum Erzeugen einer Zuordnung von Genres zu Symbolbildern
const mapGenresToImages = (genres) => {
  return genres.reduce((acc, genre) => {
    acc[genre] = `${genre.toLowerCase()}.png`; 
    return acc;
  }, {});
};

const GenreGrid = ({ mode }) => {
  // genres abrufen
  const genres = Object.keys(movies);
  
  // Generierung der Zuordnung von Symbolbildern zu Genres
  const genreImageMap = mapGenresToImages(genres);
  
  console.log("Genres: ", genres);
  console.log("Genre Image Map: ", genreImageMap);
  console.log("Mode: ", mode)

  return (
    <div className="genre-grid">
      {genres.map((genre) => (
        <GenreCard
          key={genre}
          genre={genre}
          imageSrc={genreImageMap[genre]} 
          mode={mode}
        />
      ))}
    </div>
  );
}

export default GenreGrid;
