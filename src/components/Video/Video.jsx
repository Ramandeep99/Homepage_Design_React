import React from "react";
import "./video.css";

const Video = () => {
  return (
    <>
      <h2 className="video_heading">Virtual Tour</h2>
      <div className="video">
        <img
          className="imgg" alt="img"
          src="https://www.prestigeconstructions.com//admin/uploads/projects/prestige-dew-drops/gallery/prestige-dew-drops-02.jpeg"
        />
        <div className="logos">
          <span className="material-symbols-outlined span2">play_circle</span>
          <div className="tour">VIRTUAL TOUR</div>
        </div>
      </div>
    </>
  );
};

export default Video;
