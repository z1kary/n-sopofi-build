import React from 'react'
import { NavLink } from 'react-router-dom'

const SettingsNav = () => {
  return (
    <div className="header">
      <NavLink to='/settings' className="header-nav-link">Paramètres</NavLink>
      <div className="settings-nav">
        <NavLink exact activeClassName="active" to="/settings/profile" className="settings-navlink">
          Profil
        </NavLink>
        <NavLink exact activeClassName="active" to="/settings/channel" className="settings-navlink">
          Chaîne et vidéos
        </NavLink>
        <NavLink exact activeClassName="active" to="/settings/security" className="settings-navlink">
          Sécurité et confidentialité
        </NavLink>
        <NavLink exact activeClassName="active" to="/settings/notifications" className="settings-navlink">
          Notifications
        </NavLink>
        <NavLink exact activeClassName="active" to="/settings/recommendations" className="settings-navlink">
          Recommandations
        </NavLink>
      </div>
    </div>
  )
}

export default SettingsNav
