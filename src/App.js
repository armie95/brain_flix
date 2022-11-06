import { useEffect, useState } from "react";
import "./App.scss";
import CommentsSection from "./components/CommentsSection/CommentsSection";
import Navbar from "./components/Navbar/Navbar";
import NewCommentForm from "./components/NewCommentForm/NewCommentForm";
import VideoDetailsSection from "./components/VideoDetailsSection/VideoDetailsSection";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideosList from "./components/VideosList/VideosList";
import videosDetails from "./data/video-details.json";
import videosListInformation from "./data/videos.json";

function App() {
  const [videosList, setVideosList] = useState(videosDetails);
  const [videosListInfo, setVideosListInfo] = useState(videosListInformation);
  const [currentvideo, setCurrentvideo] = useState(videosList[0]);

  useEffect(() => {
    if (videosList) {
      setCurrentvideo(videosDetails[0]);
    }
  }, [videosList]);

  useEffect(() => {
    setVideosListInfo(
      videosListInformation.filter((video) => video.id !== currentvideo.id)
    );
  }, [currentvideo]);

  const selectVideoFun = (videoID) => {
    setCurrentvideo(videosDetails.find((video) => video.id === videoID));
  };

  return (
    <div className="App">
      <Navbar />
      <VideoPlayer video={currentvideo} />
      <VideoDetailsSection video={currentvideo} />
      <NewCommentForm />
      <CommentsSection commentsList={currentvideo.comments} />
      <VideosList videosList={videosListInfo} onSelectVideo={selectVideoFun} />
    </div>
  );
}

export default App;
