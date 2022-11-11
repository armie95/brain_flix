import { useEffect, useState } from 'react'
import './App.scss'
import CommentsSection from './components/CommentsSection/CommentsSection'
import Container from './components/Container/Container'
import Navbar from './components/Navbar/Navbar'
import NewCommentForm from './components/NewCommentForm/NewCommentForm'
import VideoDetailsSection from './components/VideoDetailsSection/VideoDetailsSection'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import VideosList from './components/VideosList/VideosList'
import Loader from './components/Loader/Loader'
import axios from 'axios'

const API_URL = 'https://project-2-api.herokuapp.com/'
const API_KEY = '?api_key=4a33759a-a8e6-4bfa-9287-73814c966efd'
const VideosEndPoint = 'videos/'

function App() {
  const [videosList, setVideosList] = useState([])
  const [originalVideosList, setOriginalVideosList] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)

  //! function to fetch the videos list from the API:
  async function fetchVideosList() {
    const response = await axios.get(API_URL + VideosEndPoint + API_KEY)
    const data = response.data

    setVideosList(data)
    setOriginalVideosList(data)

    const firstVideoID = data[0].id
    onVideoClickHandler(firstVideoID)
  }

  useEffect(() => {
    setTimeout(fetchVideosList, 5000)
  }, [])

  useEffect(() => {}, [videosList])

  useEffect(() => {
    setVideosList(
      originalVideosList.filter((video) => video.id !== currentVideo.id)
    )
  }, [currentVideo])

  // ! Fetch a video details and change the currnet viddo state to the video with the id provided.:
  const onVideoClickHandler = async (videoID) => {
    const response = await axios.get(
      API_URL + VideosEndPoint + videoID + '/' + API_KEY
    )
    const data = response.data
    setCurrentVideo(data)
  }

  return (
    <div className="App">
      {currentVideo !== null ? (
        <>
          <Navbar />
          <VideoPlayer video={currentVideo} />
          <Container className={'wrapper'}>
            <Container>
              <VideoDetailsSection video={currentVideo} /> <NewCommentForm />{' '}
              <CommentsSection video={currentVideo} />
            </Container>
            <VideosList
              videosList={videosList}
              onVideoClickHandler={onVideoClickHandler}
            />
          </Container>
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default App
