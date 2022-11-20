import React from 'react'
import './UploadForm.scss'
// import imagePlaceholder from '../../assets/Images/upload-video-preview.jpg'

const imagePlaceholder = 'http://localhost:8080/images/upload-video-preview.jpg'
const UploadForm = () => {
  const handleUpload = (e) => {
    e.preventDefault()
    //TODO: Call to the api using axios post .
    console.log('Upload')
    alert('The new video has been uploaded successfully!')
  }

  const handleCancel = (e) => {
    e.preventDefault()
    alert("You've cancelled the upload")
  }

  return (
    <form className="upload-form" onSubmit={handleUpload}>
      <h1 className="upload-form__title">Upload Video</h1>

      <div className="upload-form__img-input-wrapper">
        <div className="upload-form__image-container">
          <label className="upload-form__label">Video Thumbnail</label>
          <img
            src={imagePlaceholder}
            alt="Video Thumbnail"
            className="upload-form__img"
          />
        </div>
        <div className="upload-form__inputs-container">
          <div className="upload-form__input-group">
            <label className="upload-form__title__label" htmlFor="title">
              Title Your Video
            </label>
            <input
              className="upload-form__title__input"
              type="text"
              name="title"
              id="title"
              placeholder="Add a title to your video"
            />
          </div>
          <div className="upload-form__input-group">
            <label
              className="upload-form__description__label"
              htmlFor="description"
            >
              Add a video description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Add a description to your video"
              className="upload-form__description__input"
            />
          </div>
        </div>
      </div>
      <div className="upload-form__btn-group">
        <button type="submit" className="upload-form__submit-btn">
          Publish
        </button>
        <button className="upload-form__cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default UploadForm
