import React from "react";
import Video from "../Video/Video";
import "./VideosList.scss";

const VideosList = ({ videosList, onSelectVideo }) => {
  return (
    <section className="videos-list">
      {videosList &&
        videosList.map((video) => (
          <Video key={video.id} video={video} onSelectVideo={onSelectVideo} />
        ))}
    </section>
  );
};

export default VideosList;
