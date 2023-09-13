import React from "react";
import video1 from '../assets/videos/video1.m4v'
const VideoPage = () => {
  return (
    <div className="videopage">
      <div className="ecrant">
        <video controls width="640" height="360">
          <source type="video/mp4" src={video1} />
        </video>
      </div>
    </div>
  );
};

export default VideoPage;
