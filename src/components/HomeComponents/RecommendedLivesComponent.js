import React from 'react'
import { Link } from 'react-router-dom'
import AllLives from '../LivesComponent/AllLives'

const RecommendedLivesComponent = () => {
  return (
    <div className="lives-section">
      <div className="header">
        <Link to="/lives">Lives Recommandées <i className="fas fa-compact-disc"></i></Link>
        <div className="settings">
          <i className="fas fa-cog"></i>
        </div>
      </div>
      <AllLives/>
      <div className="btn-more-container">
        <div className="line"></div>
        <div className="btn-more-btn-container">
          <button className="btn-more">Afficher plus <i className="fas fa-chevron-down"></i></button>
        </div>
      </div>
    </div>
  )
}

export default RecommendedLivesComponent
