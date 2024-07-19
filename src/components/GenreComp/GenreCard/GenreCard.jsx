import React from 'react';
import "./GenreCard.scss";
import { useNavigate } from 'react-router-dom';


import actionImage from '../../../assets/images/action.png';
import comedyImage from '../../../assets/images/comedy.png';
import dramaImage from '../../../assets/images/drama.png';
import abenteuerImage from '../../../assets/images/abenteuer.png';
import animeImage from '../../../assets/images/anime.png';
import buchverfilmungenImage from '../../../assets/images/buchverfilmungen.png';
import burtonImage from '../../../assets/images/burton.png';
import fantasyImage from '../../../assets/images/fantasy.png';
import horrorImage from '../../../assets/images/horror.png';
import kinderfilmeImage from '../../../assets/images/kinderfilme.png';
import politikImage from '../../../assets/images/politik.png';
import romanceImage from '../../../assets/images/romance.png';
import romcomImage from '../../../assets/images/romcom.png';
import scifiImage from '../../../assets/images/sci-fi.png';
import christmasImage from '../../../assets/images/christmas.png';
import trillerImage from '../../../assets/images/thriller.png';
import musicalImage from '../../../assets/images/musical.png';


const imageMap = {
  Anime: animeImage,
  "Kinderfilme": kinderfilmeImage,
  "Romance": romanceImage,
  "Tim Burton": burtonImage,
  "Action": actionImage,
  "Abenteuer": abenteuerImage,
  "Fantasy": fantasyImage,
  "Horror": horrorImage,
  "Thriller": trillerImage,
  "Musical": musicalImage,
  "Weihnachtsfilme": christmasImage,
  "Komödie": comedyImage,
  "Drama": dramaImage,
  "Science-Fiction": scifiImage,
  "Buchverfilmungen": buchverfilmungenImage,
  "RomCom": romcomImage,
  "Politische Filme": politikImage
};

const GenreCard = ({ genre, mode }) => {
  let navigate = useNavigate();
  console.log("Mode: ", mode)
  const imageSrc = imageMap[genre] || '';

  const clickHandler = (genre) => {
    const route = `/${mode}/${genre}`;
    console.log("ClockHandler hat ausgelöst mit: ", mode, route)
    navigate(route);
  };

  return (
    <div onClick={() => clickHandler(genre)}>
      <img src={imageSrc} alt={genre} />
      <h3>{genre}</h3>
    </div>
  );
};

export default GenreCard;
