import { useEffect, useState } from "react";
import "./App.scss";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import Navbar from "./components/Navbar/Navbar";
import NewCommentForm from "./components/NewCommentForm/NewCommentForm";
import VideoDetailsSection from "./components/VideoDetailsSection/VideoDetailsSection";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videosDetails from "./data/video-details.json";

function App() {
  const [videosList, setVideosList] = useState(videosDetails);
  const [currentvideo, setCurrentvideo] = useState(videosList[0]);

  useEffect(() => {
    if (videosList) {
      setCurrentvideo(videosDetails[1]);
    }
  }, [videosList]);

  return (
    <div className="App">
      <Navbar />
      <VideoPlayer video={currentvideo} />
      <VideoDetailsSection video={currentvideo} />
      <NewCommentForm />
      <CommentsSection commentsList={currentvideo.comments} />
    </div>
  );
}

export default App;
