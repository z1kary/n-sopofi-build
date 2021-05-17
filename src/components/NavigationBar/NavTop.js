import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { isEmpty } from '../Utils'
import AuthModalContainer from './AuthModalContainer'
import NotifsModal from './NotifsModal'
import UserSettingsModal from './UserSettingsModal'

const NavTop = () => {
  const history = useHistory()
  const [goBack, setGoBack] = useState(false)
  // const [goForward, setGoForward] = useState(false)
  const userData = useSelector((state) => state.userReducer)
  const [authModal, setAuthModal] = useState(false)
  const [authModalPage, setAuthModalPage] = useState(null)
  const [userSettingsModal, setUserSettingsModal] = useState(false)
  const [notifsModal, setNotifsModal] = useState(false)
  const refToggleUsm = useRef(null)
  const refToggleNotifsModal = useRef(null)
  const refToggleAuthModal = useRef(null)

  const handleAuthModal = (props) => {
    setAuthModal(!authModal)
    setAuthModalPage(props)
  } 

  const handleGoBack = () => {
    history.goBack()
  }

  const handleGoForward = () => {
    history.goForward()
  }


  useEffect(() => {
    function handleClickOutside(event) {
      if (refToggleUsm.current && !refToggleUsm.current.contains(event.target)) {
        setUserSettingsModal(false)
      } else if (refToggleNotifsModal.current && !refToggleNotifsModal.current.contains(event.target)) {
        setNotifsModal(false)
      } else if (refToggleAuthModal.current && !refToggleAuthModal.current.contains(event.target)) {
        setAuthModal(false)
      }
    }

    if (history.length > 2) {
      setGoBack(true)
    }

    // if (history.block(1)) {
    //   setGoForward(true)
    // }

    // console.log(goBack);
    // console.log(goForward);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  }, [history.length])

  return (
    <>
      <div className="navbar">
        <div className="nav-left-container">
          <div className="nav-move">
            <div className={goBack ? "chev" : "chev inactive"} onClick={() => handleGoBack()}>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="chev inactive" onClick={() => handleGoForward()}>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <form>
            <label htmlFor="search-bar" className="search-bar-label"><i className="fas fa-search"></i></label>
            <input type="text" name="search-bar" id="search-bar" placeholder="Rechercher" />
          </form>
        </div>
        <div className="nav-right-container">
          <div className="notifs-btn-container">
            {!isEmpty(userData) && !notifsModal && (
              <div className="notifs-icon" onClick={() => setNotifsModal(!notifsModal)}>
                <i className="far fa-bell"></i>
              </div>
            )}
            {!isEmpty(userData) && notifsModal && (
              <div className="notifs-icon">
                <i className="far fa-bell"></i>
              </div>
            )}
            {!isEmpty(userData) && notifsModal && (
              <div className="notifs-modal" ref={refToggleNotifsModal}>
                <NotifsModal onChange={() => setNotifsModal(!notifsModal)}/>
              </div>
            )}
            {isEmpty(userData) && (
              <div className="auth-btn">
                <div className="nav-link-auth second" onClick={() => handleAuthModal("login")}>Se connecter</div>
                <div className="nav-link-auth" onClick={() => handleAuthModal("signup")}>S'inscrire</div>
              </div>
            )}
          </div>
          <div className="user-btn-container">
            {!isEmpty(userData) && userSettingsModal && (
              <div className="user-picture">
                <img src={"http://localhost:3000" + userData.picture} alt=''/>
              </div>
            )} {isEmpty(userData) && userSettingsModal && (
              <div className="user-random">
                <i className="far fa-user"></i>
              </div>
            )} {!isEmpty(userData) && !userSettingsModal && (
              <div className="user-picture" onClick={() => setUserSettingsModal(!userSettingsModal)}>
                <img src={"http://localhost:3000" + userData.picture} alt=''/>
              </div>
            )} {isEmpty(userData) && !userSettingsModal && (
              <div className="user-random" onClick={() => setUserSettingsModal(!userSettingsModal)}>
                <i className="far fa-user"></i>
              </div>
            )}
            {userSettingsModal && (
              <div className="user-settings-modal" ref={refToggleUsm}>
                <UserSettingsModal />
              </div>
            )}
          </div>
        </div>
      </div>
      {authModal && (
        <div className="auth-modal" ref={refToggleAuthModal}>
          <AuthModalContainer authModalPage={authModalPage} onChange={() => setAuthModal(!authModal)} />
        </div>
      )}
    </>
  )
}

export default NavTop
