import React from 'react';
import "./MovieCard.scss";

const MovieCard = ({img, title, genre, plot, runtime, rating, released}) => {


  if (!img || !title || !genre || !plot || !runtime || !rating || !released) {
    return <div>Loading...</div>;
  }


  return (
    <div className='movieCard'>
      <section>
        <img src={img} alt={title + " - movie poster"} />
      </section>
      <section>
      <p>Title: {title}</p>
      <div>
      <p>Genre: {genre}</p>
      <p>Runtime: {runtime}</p>
      </div>
      <div>
      <p>IMDB Rating: {rating}</p>
      <p>Released: {released}</p>
      </div>
      <p>Plot: {plot}</p>
      </section>
    </div>
  )
}

export default MovieCard
