import React from "react";
import "./createEvent.css";
import { useNavigate } from "react-router-dom";
import camera from "../../assets/images/camera.png";
import home from "../../assets/images/home.png";
function CreateEvent() {
  const navigate = useNavigate();
  const [image, setImage] = React.useState("");

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setImage(fileUploaded);
  };
  return (
    <div className="createEvent">
      <div className="right">
        <img src={home} />
      </div>
      <div className="left">
        <h1>
          Create your <span>Event</span>
        </h1>
        <form>
          <input placeholder="Event name" name="Eventname" />
          <input placeholder="Host name" name="Hostname" />
          <input placeholder="Location" name="Hostname" />
          <div className="dateinput-div">
            <input placeholder="Start time" name="Starttime" type="date" />
            <input placeholder="End time" name="Endtime" type="date" />
          </div>

          <div className="fileupload-div">
            <p>{image ? image?.name : "Upload Image"}</p>
            <img src={camera} onClick={handleClick} />
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </div>
          <button
            onClick={() => {
              navigate("/event");
            }}
          >
            Next 🎉
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
