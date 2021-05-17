import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { isEmpty } from '../Utils'

const LeftNav = () => {
  const userData = useSelector((state) => state.userReducer)

  return (
    <div className="left-nav">
      <div className="logo">
        <NavLink to="/"><img src='http://localhost:3000/uploads/logo.png' alt="logo" /></NavLink>
      </div>
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
      <div className="btn-bot-container">
        <button className="btn-prenium">Passer prenium</button>
      </div>
    </div>
  )
}

export default LeftNav
