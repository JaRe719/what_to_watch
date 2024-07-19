import React, { useState } from "react";
import "./Chance.scss";
import logo from "../../assets/images/logo.png";
import dice from "../../assets/images/dice.png";
import ChanceLogic from "../../components/ChanceComp/ChanceLogic/ChanceLogic";
import ChanceRoller from "../../components/ChanceComp/ChanceRoller/ChanceRoller";
import { useNavigate} from "react-router-dom";

const Chance = () => {
  const [trigger, setTrigger] = useState(false);
  const [both, setBoth] = useState(false);


  let navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/mode");
    console.log("/mode")
  };

  const handleDiceClick = () => {
    navigate(`/genres/chance`);
  };

  return (
    <div className="chanceSide">
      <article className="headline">
        <img src={logo} alt="TV with W.T.W text" onClick={handleLogoClick}/>
        <img src={dice} alt="Dice" onClick={handleDiceClick}/>
      </article>
      <article className="chanceContent">
        {both ? (
          <div className="chanceBoth">
            <ChanceRoller
              setTrigger={setTrigger}
              trigger={trigger}
              setBoth={setBoth}
            />
            <ChanceLogic trigger={trigger} />
          </div>
        ) : (
          <>
            <ChanceRoller
              setTrigger={setTrigger}
              trigger={trigger}
              setBoth={setBoth}
            />
          </>
        )}
      </article>
    </div>
  );
};

export default Chance;
