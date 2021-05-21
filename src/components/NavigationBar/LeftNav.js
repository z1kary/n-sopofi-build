import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { isEmpty } from '../Utils'

const LeftNav = () => {
  const userData = useSelector((state) => state.userReducer)
  const isDashboardPathname = useLocation().pathname
  const [dashboardNav, setDashboardNav] = useState(false)
  const refNavslide1 = useRef(null)
  const refNavslide2 = useRef(null)

  const handleSlideLeft = () => {
    refNavslide1.current.classList.add("right")
    refNavslide2.current.classList.add("right")
    refNavslide1.current.classList.remove("left")
    refNavslide2.current.classList.remove("left")
  }

  const handleSlideRight = () => {
    refNavslide1.current.classList.add("left")
    refNavslide2.current.classList.add("left")
    refNavslide1.current.classList.remove("right")
    refNavslide2.current.classList.remove("right")
  }
 
  useEffect(() => {
    if (isDashboardPathname.includes('dashboard')) {
      setDashboardNav(true)
      refNavslide1.current.classList.add('left')
    } else {
      setDashboardNav(false)
      refNavslide1.current.classList.add('right')
    }
    
  }, [isDashboardPathname])

  return (
    <div className="left-nav">
      <div className="logo">
        <NavLink to="/"><img src={process.env.REACT_APP_CLIENT_URL + "uploads/logo.png"} alt="logo" /></NavLink>
      </div>

      <div className="nav-slider-container">

        <div className="nav-slide" ref={refNavslide1}>

          <div className="menu">
            <div className="header">
              <p>menu</p>
            </div>
            <div className="menu-links-container">
              <NavLink to="/" exact activeClassName="active" className="menu-link">
                <i className="fas fa-home"></i> 
                <p>Accueil</p>
              </NavLink>
              <NavLink to="/explore" exact activeClassName="active" className="menu-link">
                <i className="fas fa-compass"></i> 
                <p>Explorer</p>
              </NavLink>
              <NavLink to="/videos" exact activeClassName="active" className="menu-link">
                <i className="fas fa-film"></i>
                <p>Vidéos</p>
              </NavLink>
              <NavLink to="/music" exact activeClassName="active" className="menu-link">
                <i className="fas fa-music"></i>
                <p>Musique</p>
              </NavLink>
              <NavLink to="/meditation" exact activeClassName="active" className="menu-link">
                <i className="fas fa-burn"></i>
                <p>Méditation</p>
              </NavLink>
            </div>
          </div>

          {!isEmpty(userData) && (
            <div className="menu">
              <div className="header">
                <p>Social</p>
              </div>
              <div className="menu-links-container">
                <NavLink to="/" exact activeClassName="" className="menu-link">
                  <i className="far fa-user"></i>
                  <p>Abonnements</p>
                </NavLink>
                <NavLink to={"/" + userData.username} exact activeClassName="active" className="menu-link">
                  <i className="fas fa-video"></i>
                  <p>Vos vidéos</p>
                </NavLink>
                <NavLink to="/" exact activeClassName="" className="menu-link">
                  <i className="fas fa-list-ul"></i>
                  <p>Playlists</p>
                </NavLink>
              </div>
            </div>
          )}

          <div className="menu">
            <div className="header">
              <p>General</p>
            </div>
            <div className="menu-links-container">
              <NavLink to="/settings" activeClassName="active" className="menu-link">
                <i className="fas fa-cog"></i>
                <p>Paramètres</p>
              </NavLink>
              {!isEmpty(userData) && (
                <NavLink to="/logout" activeClassName="active" className="menu-link">
                  <i className="fas fa-sign-out-alt"></i>
                  <p>Se déconnecter</p>
                </NavLink>
              )}
            </div>
          </div>
        </div>

        {!isEmpty(userData) && dashboardNav && (
          <>
            <div className="nav-slide-2 left" ref={refNavslide2}>

              <div className="menu">
                <div className="header">
                  <p>Dashboard</p>
                </div>
                <NavLink to="/" exact activeClassName="" className="menu-link">
                  <i className="fab fa-envira"></i>
                  <p>Tableau de bord</p>
                </NavLink>
                <NavLink to="/" exact activeClassName="" className="menu-link">
                  <i className="fas fa-chart-line"></i>
                  <p>Données analytiques</p>
                </NavLink>
                <NavLink to="/" exact activeClassName="" className="menu-link">
                  <i className="fas fa-list-ul"></i>
                  <p>Playlists</p>
                </NavLink>
                <NavLink to="/" exact activeClassName="" className="menu-link">
                  <i className="far fa-comments"></i>
                  <p>Commentaires</p>
                </NavLink>
                <NavLink to="/" exact activeClassName="" className="menu-link">
                  <i className="fas fa-hand-holding-usd"></i>
                  <p>Monétisation</p>
                </NavLink>
                <NavLink to="/" exact activeClassName="" className="menu-link">
                  <i className="fas fa-highlighter"></i>
                  <p>Personnalisation</p>
                </NavLink>
              </div>

            </div>

            <div className="ns-controls">
              {!refNavslide1.current.classList.contains('left') ? (
                <div className="left disactive">
                  <i className="fas fa-chevron-left"></i>
                </div>
              ) : (
                <div className="left" onClick={() => handleSlideLeft()}>
                  <i className="fas fa-chevron-left"></i>
                </div>
              )}
              <div className="right" onClick={() => handleSlideRight()}>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </>
        )}
      
      </div>

      <div className="btn-bot-container">
        <button className="btn-prenium">Passer prenium</button>
      </div>
    </div>
  )
}

export default LeftNav
