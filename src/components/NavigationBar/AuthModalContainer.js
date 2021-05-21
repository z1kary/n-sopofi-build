import React, { useEffect, useRef, useState } from 'react'
import AuthModal from './AuthModal'

const AuthModalContainer = (props) => {
  const refAuthModal = useRef(null)
  const [authModalPage, setAuthModalPage] = useState(false)
  
  useEffect(() => {
    if (props.authModalPage === "login") {
      setAuthModalPage('login')
    } else if (props.authModalPage === "signup") {
      setAuthModalPage('signup')
    }

    function handleClickOutside(event) {
     if (refAuthModal.current && !refAuthModal.current.contains(event.target)) {
        props.onChange()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
  }, [props])
  

  return (
    <>
      <div className="amc">
        <div className="auth-modal-container" ref={refAuthModal}>
          <div className="auth-modal-content">
            <div className="header">
              <div className="text">
                {authModalPage === "login" && (
                  <h2>Se connecter</h2>
                )}
                {authModalPage === "signup" && (
                  <h2>S'inscrire</h2>
                )}
              </div>
              <div className="logo">
                <img src={process.env.REACT_APP_CLIENT_URL + "uploads/logo.png"} alt="logo"/>
              </div>
            </div>
            <div className="auth-nav">
              <div className={authModalPage === "login" ? "login-btn active" : "login-btn"} onClick={() => setAuthModalPage("login")}>
                <h2>Se connecter</h2>
              </div>
              <div className={authModalPage === "signup" ? "signup-btn active" : "signup-btn"} onClick={() => setAuthModalPage('signup')}>
                <h2>S'inscrire</h2>
              </div>
            </div>
            {authModalPage === "login" && (
              <AuthModal login={true} signup={false}/>
            )}
            {authModalPage === "signup" && (
              <AuthModal login={false} signup={true}/>
            )}
          </div>
        </div>
        <div className="close-modal">
          <i className="fas fa-times"></i>
        </div>
      </div>
    </>
  )
}

export default AuthModalContainer
