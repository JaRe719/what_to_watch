import React, { useState } from 'react';
import "./Ranking.scss";
import RankingComp from '../../Components/RankingComp/RankingComp';


const Ranking = () => {
  const [trigger, setTrigger] = useState(false);

  return (
    <div>
      Ranking
      <RankingComp trigger={trigger} setTrigger={setTrigger}/>
    </div>
  )
}

export default Ranking;
