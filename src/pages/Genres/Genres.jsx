import React from 'react';
import "./Genres.scss";
import { useParams } from 'react-router-dom';
import GenreGrid from "../../Components/GenreComp/GenreGrid/GenreGrid";

const Genres = () => {

  const params = useParams();
  console.log("Params: ",params);
  return (
    <div>
      <GenreGrid mode={params.mode} />
    </div>
  )
}

export default Genres
