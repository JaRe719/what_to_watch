import React, { useState } from "react";
import "./Chance.scss";
import logo from "../../assets/images/logo.png";
import dice from "../../assets/images/dice.png";
import ChanceLogic from "../../Components/ChanceComp/ChanceLogic/ChanceLogic";
import ChanceRoller from "../../Components/ChanceComp/ChanceRoller/ChanceRoller";

const Chance = () => {
  const [trigger, setTrigger] = useState(false);
  const [both, setBoth] = useState(false);

  return (
    <div className="chanceSide">
      <article className="headline">
        <img src={logo} alt="TV with W.T.W text" />
        <img src={dice} alt="Dice" />
      </article>
      <article className="chanceContent">
        {both ? (
          <>
            <ChanceRoller
              setTrigger={setTrigger}
              trigger={trigger}
              setBoth={setBoth}
            />
            <ChanceLogic trigger={trigger} />
          </>
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
