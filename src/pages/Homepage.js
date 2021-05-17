import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AsideBar from '../components/NavigationBar/AsideBar'
import RecommendedMusicsComponent from '../components/HomeComponents/RecommendedMusicsComponent'
import RecommendedVideosComponent from '../components/HomeComponents/RecommendedVideosComponent'
import RecommendedLivesComponent from '../components/HomeComponents/RecommendedLivesComponent'
import SliderComponent from '../components/HomeComponents/SliderComponent'
import { useSelector } from 'react-redux'
import { isEmpty } from '../components/Utils'

const Homepage = () => {
  const [sbio, setSbio] = useState(null)
  const ulc = useSelector((state) => state.ulcReducer)

  useEffect(() => {
    if (!isEmpty(ulc)) {
      setSbio(ulc.sideBarIsOpen)
    }
  }, [ulc])

  return (
    <div className={sbio ? "small-app app" : "app"}>
      <div className="page-container">
        
        <SliderComponent/>

        <RecommendedVideosComponent/>
        
        <RecommendedMusicsComponent/>
        
        <RecommendedLivesComponent/>

        <div className="meditation-section">
          <div className="header">
            <Link to="/meditation">Méditation</Link>
            <div className="settings">
              <i className="fas fa-cog"></i>
            </div>
          </div>
        </div>
      </div>
      <AsideBar/>
    </div>
  )
}

export default Homepage
