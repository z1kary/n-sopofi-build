import React from 'react'
import { Link } from 'react-router-dom'
import AllMusics from '../MusicsComponent/AllMusics'

const RecommendedMusicsComponent = () => {
  return (
    <div className="musics-section">
      <div className="header">
        <Link to="/music">Musiques Recommandées<i className="fas fa-music"></i></Link>
        <div className="settings">
          <i className="fas fa-cog"></i>
        </div>
      </div>
      <AllMusics/>
      <div className="btn-more-container">
        <div className="line"></div>
        <div className="btn-more-btn-container">
          <button className="btn-more">Afficher plus <i className="fas fa-chevron-down"></i></button>
        </div>
      </div>
    </div>
  )
}

export default RecommendedMusicsComponent
