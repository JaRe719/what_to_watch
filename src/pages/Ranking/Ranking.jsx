import React, { useState } from "react";
import "./Ranking.scss";
import logo from "../../assets/images/logo.png";
import arrows from "../../assets/images/arrows.png";
import RankingComp from "../../components/RankingComp/RankingComp";
import { useNavigate } from "react-router-dom";


const Ranking = () => {
  const [trigger, setTrigger] = useState(false);

  let navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/mode");
  };

  const handleArrowClick = () => {
    navigate(`/genres/ranking`);
  };
  return (
    <section className="rankingSide">
      <div className="headline">
        <img src={logo} alt="TV with W.T.W text" onClick={handleLogoClick}/>
        <img src={arrows} alt="arrows" onClick={handleArrowClick}/>
      </div>
      <h2>Wähle deinen Favoriten</h2>
      <RankingComp trigger={trigger} setTrigger={setTrigger} />
    </section>
  );
};

export default Ranking;
