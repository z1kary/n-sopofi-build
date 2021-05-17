import React from 'react'
import { Link } from 'react-router-dom'

const AllMusics = () => {
  return (
    <div className="musics-content">
      <Link to="/music/" className="music-container">
        <div className="bg-img">
          <i className="far fa-play-circle"></i>
        </div>
        <div className="music-infos">
          <h3>Titre de la musique</h3>
          <p>Username</p>
        </div>
      </Link>
      <Link to="/music/" className="music-container">
        <div className="bg-img">
          <i className="far fa-play-circle"></i>
        </div>
        <div className="music-infos">
          <h3>Titre de la musique</h3>
          <p>Username</p>
        </div>
      </Link>
      <Link to="/music/" className="music-container">
        <div className="bg-img">
          <i className="far fa-play-circle"></i>
        </div>
        <div className="music-infos">
          <h3>Titre de la musique</h3>
          <p>Username</p>
        </div>
      </Link>
      <Link to="/music/" className="music-container">
        <div className="bg-img">
          <i className="far fa-play-circle"></i>
        </div>
        <div className="music-infos">
          <h3>Titre de la musique</h3>
          <p>Username</p>
        </div>
      </Link>
    </div>
  )
}

export default AllMusics
