import React, { useState } from "react";
import "./Ranking.scss";
import logo from "../../assets/images/logo.png";
import arrows from "../../assets/images/arrows.png";
import RankingComp from "../../Components/RankingComp/RankingComp";

const Ranking = () => {
  const [trigger, setTrigger] = useState(false);

  return (
    <section className="rankingSide">
      <div className="headline">
        <img src={logo} alt="TV with W.T.W text" />
        <img src={arrows} alt="arrows" />
      </div>
      <h2>Wähle deinen Favoriten</h2>
      <RankingComp trigger={trigger} setTrigger={setTrigger} />
    </section>
  );
};

export default Ranking;
