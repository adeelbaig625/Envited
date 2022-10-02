import React from "react";
import "./event.css";
import event from "../../assets/images/event.png";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/images/arrow.png";
import calendar from "../../assets/images/calendarIcon.png";
import address from "../../assets/images/addressIcon.png";
function Event() {
  const navigate = useNavigate();
  return (
    <div className="event">
      <div className="event-wrapper">
        <div className="left">
          <h1>Birthday Bash</h1>
          <p>
            Hosted by <span>Elysia</span>
          </p>
          <div className="card">
            <img src={calendar} className="icon" />
            <div className="event-text">
              <p className="event-text-1">18 August 6:00PM</p>
              <p className="event-text-2">
                to{" "}
                <span style={{ fontFamily: "HelveticaBold" }}>
                  19 August 1:00PM
                </span>{" "}
                UTC +10
              </p>
            </div>
            <img src={arrow} className="arrow" />
          </div>
          <div className="card">
            <img src={address} className="icon" />
            <div className="event-text">
              <p className="event-text-1">Street name</p>
              <p className="event-text-2">Suburb, State, Postcode</p>
            </div>
            <img src={arrow} className="arrow" />
          </div>
        </div>
        <div className="right">
          <img src={event} />
        </div>
      </div>
    </div>
  );
}

export default Event;
