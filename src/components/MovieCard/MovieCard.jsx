import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ img, title, genre, plot, runtime, rating, released }) => {
  if (!img || !title || !genre || !plot || !runtime || !rating || !released) {
    return <div>Loading...</div>;
  }

  return (
    <section className="movieCard">
      <article className="movieImgBox">
        <img src={img} alt={title + " - movie poster"} />
      </article>
      <article className="movieCardTextBox">
        <p>
          <span>Title:</span> {title}
        </p>
        <div>
          <p>
            <span>Genre:</span> {genre}
          </p>
          <p>
            <span>Runtime:</span> {runtime}
          </p>
        </div>
        <div>
          <p>
            <span>IMDB Rating:</span> {rating}
          </p>
          <p>
            <span>Released:</span> {released}
          </p>
        </div>
        <p>
          <span>Plot:</span> {plot}
        </p>
      </article>
    </section>
  );
};

export default MovieCard;
