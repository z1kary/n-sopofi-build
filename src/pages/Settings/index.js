import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import AsideBar from '../../components/NavigationBar/AsideBar'
import SettingsNav from '../../components/SettingsComponent/SettingsNav'
import { isEmpty } from '../../components/Utils'
import ProfileSettings from './ProfileSettings'

const Settings = (props) => {
  const pathname = props.location.pathname.replace("/", '')
  const [sbio, setSbio] = useState(null)
  const ulc = useSelector((state) => state.ulcReducer)
  const [indexSettings, setIndexSettings] = useState(false)
  const [profileSettings, setProfileSettings] = useState(false)
  const [channelSettings, setChannelSettings] = useState(false)
  const [securitySettings, setSecuritySettings] = useState(false)
  const [notifsSettings, setNotifsSettings] = useState(false)
  const [recommendationsSettings, setRecommendationsSettings] = useState(false)

  useEffect(() => {
    if (!isEmpty(ulc)) {
      setSbio(ulc.sideBarIsOpen)
    }

    if (pathname === "settings") {
      setIndexSettings(true)
      setProfileSettings(false)
      setChannelSettings(false)
      setSecuritySettings(false)
      setNotifsSettings(false)
      setRecommendationsSettings(false)
    } else if (pathname === "settings/profile"){
      setIndexSettings(false)
      setProfileSettings(true)
      setChannelSettings(false)
      setSecuritySettings(false)
      setNotifsSettings(false)
      setRecommendationsSettings(false)
    } else if (pathname === "settings/channel") {
      setIndexSettings(false)
      setProfileSettings(false)
      setChannelSettings(true)
      setSecuritySettings(false)
      setNotifsSettings(false)
      setRecommendationsSettings(false)
    } else if (pathname === "settings/security") {
      setIndexSettings(false)
      setProfileSettings(false)
      setChannelSettings(false)
      setSecuritySettings(true)
      setNotifsSettings(false)
      setRecommendationsSettings(false)
    } else if (pathname === "settings/notifications") {
      setIndexSettings(false)
      setProfileSettings(false)
      setChannelSettings(false)
      setSecuritySettings(false)
      setNotifsSettings(true)
      setRecommendationsSettings(false)
    } else if (pathname === "settings/recommendations") {
      setIndexSettings(false)
      setProfileSettings(false)
      setChannelSettings(false)
      setSecuritySettings(false)
      setNotifsSettings(false)
      setRecommendationsSettings(true)
    }
  }, [ulc, pathname])

  return (
    <div className={sbio ? "small-app app" : "app"}>
      <div className="settings-page">
        <SettingsNav />
        <div className="settings-content">
          {indexSettings && (
            <>
              <h3 className="sc-header">Modifier vos informations depuis cette interface</h3>
              <NavLink to="/settings/profile" className="sc-btn">Mettre à jour mon profil <i className="fas fa-chevron-right"></i></NavLink>
            </>
          )}
          {profileSettings && (
            <ProfileSettings/>
          )}
          {channelSettings && (
            <h2>Channel settings</h2>
          )}
          {securitySettings && (
            <h2>Security settings</h2>
          )}
          {notifsSettings && (
            <h2>notifs settings</h2>
          )}
          {recommendationsSettings && (
            <h2>Recommendations settings</h2>
          )}
        </div>
      </div>
      <AsideBar/>
    </div>
  )
}

export default Settings
