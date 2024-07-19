import React from "react";
import "./ChanceRoller.scss";
import dice from "../../../assets/images/dice.png";
import Button from "../../Button/Button";

const ChanceRoller = ({ setTrigger, trigger, setBoth }) => {
  const clickHandler = () => {
    setTrigger(!trigger);
    setBoth(true);
  };

  return (
    <section className="chanceRoller">
      <div>
        <img src={dice} alt="dice with questionmarks instead of numbers" />
      </div>
      <Button text="Würfle" action={clickHandler} />
    </section>
  );
};

export default ChanceRoller;
