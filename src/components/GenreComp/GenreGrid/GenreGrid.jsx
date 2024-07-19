import React from 'react';
import "./GenreGrid.scss";
import GenreCard from "../GenreCard/GenreCard";
import movies from "../../../utils/movies.json";
import logo from "../../../assets/images/logo.png"

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
      <div className="headline">
        <img src={logo} alt="TV with W.T.W text" />
      </div>
      <div className='heading'>
        <h2>Wähle ein Genre</h2>
        <h2>...oder lass dir alle anzeigen</h2>
      </div>
      <div className='grid'>
      {genres.map((genre) => (
        <GenreCard
          key={genre}
          genre={genre}
          imageSrc={genreImageMap[genre]} 
          mode={mode}
        />
      ))}
      <GenreCard 
      key="all"
      genre="Alle Genres"
      imageSrc={genreImageMap["all"]}
      mode={mode}
      />
      </div>
    </div>
  );
}

export default GenreGrid;
