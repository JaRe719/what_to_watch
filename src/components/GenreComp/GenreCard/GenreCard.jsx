import React from 'react';
import "./GenreCard.scss";
import { useNavigate } from 'react-router-dom';

const GenreCard = (mode, genre) => {

  let navigate = useNavigate();

  const clickHandler = (genre)=>{
    const route = "/"+mode+"/"+genre
    navigate(route);
  }

  return (
    <div>
      
    </div>
  )
}

export default GenreCard
