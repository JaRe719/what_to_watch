import React, { useState } from 'react';
import "./Chance.scss";
import ChanceLogic from '../../Components/ChanceComp/ChanceLogic/ChanceLogic';
import ChanceRoller from '../../Components/ChanceComp/ChanceRoller/ChanceRoller';

const Chance = () => {
  const [trigger, setTrigger] = useState(false);
  const [both, setBoth] = useState(false);

  return (
    <div>
      {both?
      <>
      <ChanceRoller setTrigger={setTrigger} trigger={trigger} setBoth={setBoth}/>
      <ChanceLogic trigger={trigger}/>
      </>
      :
      <>
      <ChanceRoller setTrigger={setTrigger} trigger={trigger} setBoth={setBoth}/>
      </>
      }
    </div>
  )
}

export default Chance
