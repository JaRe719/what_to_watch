import React from "react";
import logo from "../../assets/images/logo.png";
import match from "../../assets/images/arrows.png";
import random from "../../assets/images/dice.png";
import "./Mode.scss";

const Mode = () => {
  return (
    <section className="modeSide">
      <div className="headline">
        <img src={logo} alt="TV with W.T.W text" />
      </div>
      <h2>Wähle einen Modus</h2>

      <div className="choiseBox">
        <div className="modeBox">
          <div>
            <img src={match} alt="matchfield" />
          </div>
          <h3>Finde das beste Match</h3>
        </div>
        <div className="modeBox">
          <div>
            <img src={random} alt="Randomfield" />
          </div>
          <h3>Lass dich überraschen</h3>
        </div>
      </div>
    </section>
  );
};

export default Mode;
