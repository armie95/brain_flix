import React from 'react'
import './UploadForm.scss'
import imagePlaceholder from '../../assets/Images/upload-video-preview.jpg'

const UploadForm = () => {
  const handleUpload = (e) => {
    e.preventDefault()
    console.log('Upload')
    alert('Submitted successfully')
  }

  const handleCancel = (e) => {
    e.preventDefault()
  }

  return (
    <form className="upload-form" onSubmit={handleUpload}>
      <h3 className="upload-form__title">Upload Video</h3>
      <div className="upload-form__image-container">
        <label className="upload-form__label">Video Thumbnail</label>
        <img
          src={imagePlaceholder}
          alt="Video Thumbnail"
          className="upload-form__img"
        />
      </div>
      <div className="upload-form__input-group">
        <label className="upload-form__title__label" htmlFor="title">
          Title You Video
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
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Add a description to your video"
          className="upload-form__description__input"
        />
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
