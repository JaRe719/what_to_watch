import React from "react";
import Button from "../../Components/Button/Button";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/mode");
  };
  return (
    <section className="homeSide">
      <dir className="homeBox">
        <div className="textBox">
          <p>Don’t know</p>
          <h1>what to watch?</h1>
        </div>

        <Button text="Let’s find out !" action={handleClick()} />
      </dir>
    </section>
  );
};

export default Home;
