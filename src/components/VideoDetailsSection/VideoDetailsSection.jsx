import React from 'react'
import './VideoDetailsSection.scss'
import likesIcons from '../../assets/Icons/likes.svg'
import viewsIcons from '../../assets/Icons/views.svg'

const VideoDetailsSection = ({ video }) => {
  const timestampToDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString()
  }

  return (
    <section className="video-details-section">
      <h3 className="video-details-section__title">{video?.title}</h3>
      <div className="video-details-section__statistics-container">
        <div className="video-details-section__channel-and-date">
          <h5 className="video-details-section__channel">
            By {video?.channel}
          </h5>
          <h5 className="video-details-section__date">
            {timestampToDate(video?.timestamp)}
          </h5>
        </div>
        <div className="video-details-section__views-and-likes">
          <div className="video-details-section__likes-container">
            <h5 className="video-details-section__views">
              <img
                src={viewsIcons}
                alt="views Counter"
                className="video-details-section__views-icon"
              />
              {video?.views}
            </h5>
          </div>
          <div className="video-details-section__likes-container">
            <h5 className="video-details-section__likes">
              <img
                src={likesIcons}
                alt="Likes Counter"
                className="video-details-section__likes-icon"
              />
              {video?.likes}
            </h5>
          </div>
        </div>
      </div>
      <p className="video-details-section__description">{video?.description}</p>
      <h3 className="video-details-section__comments-count">
        {video?.comments?.length} Comments
      </h3>
    </section>
  )
}

export default VideoDetailsSection
