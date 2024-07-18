import React, { useEffect, useState } from 'react';
import "./ChanceLogic.scss";
import movies from "../../../utils/movies.json";

const ChanceLogic = () => {
  const [suggestion, setSuggestion] = useState({});

  useEffect(()=>{
    makeSuggestion();
  },[]);

  const makeSuggestion = ()=>{
    const randomMovie = Math.floor(Math.random() * movies.length);
    const suggest = movies[randomMovie];

    setSuggestion(suggest);
  }


  return (
    <div>
      
    </div>
  )
}

export default ChanceLogic;
