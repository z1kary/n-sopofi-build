import React from 'react'
import { Link } from 'react-router-dom'
import AllVideos from '../VideosComponent/AllVideos'

const RecommendedVideosComponent = () => {
  
  return (
    <div className="videos-section">
      <div className="header">
        <Link to="/videos">Vidéos Recommandées <i className="fas fa-film"></i></Link>
        <div className="settings">
          <i className="fas fa-cog"></i>
        </div>
      </div>
      <AllVideos/>
      <div className="btn-more-container">
        <div className="line"></div>
        <div className="btn-more-btn-container">
          <button className="btn-more">Afficher plus <i className="fas fa-chevron-down"></i></button>
        </div>
      </div>
    </div>
  )
}

export default RecommendedVideosComponent
