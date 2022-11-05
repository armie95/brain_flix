import { useEffect, useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import VideoDetailsSection from "./components/VideoDetailsSection/VideoDetailsSection";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videosDetails from "./data/video-details.json";

function App() {
  const [videosList, setVideosList] = useState(videosDetails);
  const [currentvideo, setCurrentvideo] = useState(videosList[0]);

  useEffect(() => {
    if (videosList) {
      setCurrentvideo(videosDetails[0]);
    }
  }, [videosList]);

  return (
    <div className="App">
      <Navbar />
      <VideoPlayer video={currentvideo} />
      <VideoDetailsSection video={currentvideo} />
    </div>
  );
}

export default App;
