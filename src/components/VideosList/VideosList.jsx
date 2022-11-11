import React from "react";
import Video from "../Video/Video";
import "./VideosList.scss";

const VideosList = ({ videosList, onVideoClickHandler }) => {
  return (
    <section className="videos-list">
      <h3 className="videos-list__title">Next Videos</h3>
      {videosList &&
        videosList.map((video) => (
          <Video
            key={video.id}
            video={video}
            onVideoClickHandler={onVideoClickHandler}
          />
        ))}
    </section>
  );
};

export default VideosList;
