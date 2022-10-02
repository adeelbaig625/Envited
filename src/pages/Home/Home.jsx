import React from "react";
import "./home.css";
import home from "../../assets/images/home.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="right">
        <img src={home} />
        <button className="mobilebtn" onClick={() => navigate("/create")}>
          🎉 Create my event
        </button>
      </div>
      <div className="left">
        <h1>
          Imagine if <br />
          <span> Snapchat</span>
          <br />
          had events.
        </h1>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
        <button onClick={() => navigate("/create")}>🎉 Create my event</button>
      </div>
    </div>
  );
}

export default Home;
