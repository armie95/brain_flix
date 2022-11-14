import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CommentsSection from '../components/CommentsSection/CommentsSection'
import Container from '../components/Container/Container'
import NewCommentForm from '../components/NewCommentForm/NewCommentForm'
import VideoDetailsSection from '../components/VideoDetailsSection/VideoDetailsSection'
import VideoPlayer from '../components/VideoPlayer/VideoPlayer'
import VideosList from '../components/VideosList/VideosList'
import axios from 'axios'

//! Constants:
const API_URL = 'https://project-2-api.herokuapp.com/'
const API_KEY = '?api_key=4a33759a-a8e6-4bfa-9287-73814c966efd'
const VideosEndPoint = 'videos/'

const Home = () => {
  const [videosList, setVideosList] = useState([])
  const [originalVideosList, setOriginalVideosList] = useState([])
  const [currentVideo, setCurrentVideo] = useState(null)
  let navigate = useNavigate()
  let params = useParams()

  //! function to fetch the videos list from the API:
  async function fetchVideosList() {
    const response = await axios.get(API_URL + VideosEndPoint + API_KEY)
    const data = response.data

    setVideosList(data)
    setOriginalVideosList(data)

    const firstVideoID = data[0].id
    navigate('/' + firstVideoID)
  }

  useEffect(() => {
    fetchVideosList()
  }, [])

  useEffect(() => {
    setVideosList(
      originalVideosList.filter((video) => video.id !== currentVideo.id)
    )
  }, [currentVideo])

  useEffect(() => {
    const { videoId } = params
    if (videoId) {
      handelVideoIdChange(videoId)
    }
  }, [params.videoId])

  const handelVideoIdChange = async (videoID) => {
    const response = await axios.get(
      API_URL + VideosEndPoint + videoID + '/' + API_KEY
    )
    setCurrentVideo(response.data)
    // window.location.hash = ''
    window.location.hash = '#top'
  }

  return (
    <>
      <VideoPlayer video={currentVideo} />
      <Container className={'wrapper'}>
        <Container>
          <VideoDetailsSection video={currentVideo} />
          <NewCommentForm />
          <CommentsSection video={currentVideo} />
        </Container>
        <VideosList videosList={videosList} />
      </Container>
    </>
  )
}

export default Home
