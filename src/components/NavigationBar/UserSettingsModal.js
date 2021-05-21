import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { isEmpty } from '../Utils'

const UserSettingsModal = () => {
  const userData = useSelector((state) => state.userReducer)
  const refUsmContainer = useRef(null)

  // const themes = useContext(ThemeContext)
  // const [theme, setTheme] = useState(themes.dark)

  const handleUsmHome = () => {
    // console.log("home");
    refUsmContainer.current.classList.add('home-page')
    refUsmContainer.current.classList.remove('language-page')
    refUsmContainer.current.classList.remove('theme-page')
  }
  const handleUsmLanguage = () => {
    // console.log("language");
    refUsmContainer.current.classList.remove('home-page')
    refUsmContainer.current.classList.add('language-page')
    refUsmContainer.current.classList.remove('theme-page')
  }
  const handleUsmTheme = () => {
    // console.log("theme");
    refUsmContainer.current.classList.remove('home-page')
    refUsmContainer.current.classList.remove('language-page')
    refUsmContainer.current.classList.add('theme-page')
  }
  
  useEffect(() => {

  }, [])

  return (
    <div className="usm-container" ref={refUsmContainer}>
      <div className="usm-home">
        {!isEmpty(userData) ? (
          <>
            <div className="header">
              <div className="header-container">
                <Link to={"/" + userData.username} className="header-user-picture">
                  <img src={"http://localhost:3000" + userData.picture} alt=""/>
                </Link>
                <div className="user-infos">
                  <Link to={"/" + userData.username} className="name">{userData.username}</Link>
                  <Link to={"/" + userData.username} className="followers">{isEmpty(userData.followers) ? (<p>0 abonné</p>) : (<p>{userData.followers.length} abonnés</p>)}</Link>
                </div>
              </div>
            </div>
            <div className="btw-links"></div>
            <div className="usm-link-parent">
              <Link to={"/" + userData.username} className="usm-link">
                <div className="usm-link-container">
                  <div className="fi"><i className="far fa-user"></i></div>
                  <div className="text">Ma chaîne</div>
                </div>
              </Link>
            </div>
            <div className="usm-link-parent">
              <Link to={"dashboard/" + userData.username + "/home"} className="usm-link">
                <div className="usm-link-container">
                  <div className="fi"><i className="fas fa-poll"></i></div>
                  <div className="text">Tableau de bord</div>
                </div>
              </Link>
            </div>
            <div className="usm-link-parent">
              <Link to={"dashboard/" + userData.username + "/video"} className="usm-link">
                <div className="usm-link-container">
                  <div className="fi"><i className="fas fa-film"></i></div>
                  <div className="text">Studio Vidéo</div>
                </div>
              </Link>
            </div>
            <div className="btw-links"></div>
            <div className="usm-link-parent">
              <button className="usm-link" onClick={() => handleUsmLanguage()}>
                <div className="usm-link-container" >
                  <div className="fi"><i className="fas fa-globe"></i></div>
                  <div className="text">Langue - Français</div>
                  <div className="si"><i className="fas fa-chevron-right"></i></div>
                </div>
              </button>
            </div>
            <div className="usm-link-parent">
              <button className="usm-link" onClick={() => handleUsmTheme()}>
                <div className="usm-link-container">
                  <div className="fi"><i className="fas fa-adjust"></i></div>
                  <div className="text">Thème - Dark Blue</div>
                  <div className="si"><i className="fas fa-chevron-right"></i></div>
                </div>
              </button>
            </div>
            <div className="usm-link-parent">
              <button className="usm-link">
                <div className="usm-link-container">
                  <div className="fi"><i className="fas fa-info-circle"></i></div>
                  <div className="text">Préférences de cookies</div>
                </div>
              </button>
            </div>
            <div className="usm-link-parent">
              <Link to="/settings" className="usm-link">
                <div className="usm-link-container">
                  <div className="fi"><i className="fas fa-cog"></i></div>
                  <div className="text">Paramètres</div>
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="usm-link-parent">
              <button className="usm-link" onClick={() => handleUsmLanguage()}>
                <div className="usm-link-container" >
                  <div className="fi"><i className="fas fa-globe"></i></div>
                  <div className="text">Langue - Français</div>
                  <div className="si"><i className="fas fa-chevron-right"></i></div>
                </div>
              </button>
            </div>
            <div className="usm-link-parent">
              <button className="usm-link" onClick={() => handleUsmTheme()}>
                <div className="usm-link-container">
                  <div className="fi"><i className="fas fa-adjust"></i></div>
                  <div className="text">Thème - Dark Blue</div>
                  <div className="si"><i className="fas fa-chevron-right"></i></div>
                </div>
              </button>
            </div>
            <div className="usm-link-parent">
              <button className="usm-link">
                <div className="usm-link-container">
                  <div className="fi"><i className="fas fa-info-circle"></i></div>
                  <div className="text">Préférences de cookies</div>
                </div>
              </button>
            </div>
            <div className="usm-link-parent">
              <button className="usm-link">
                <div className="usm-link-container">
                  <div className="fi"><i className="fas fa-cog"></i></div>
                  <div className="text">Paramètres</div>
                </div>
              </button>
            </div>
          </>
        )}
      </div>
        <div className="usm-language">
          <div className="header" onClick={() => handleUsmHome()}>
            <div className="icon"><i className="fas fa-chevron-left"></i></div>
            <div className="text"><span>Langues</span></div>
          </div>
          <div className="content">
            <button className="content-link"><span>English</span><i className="fas fa-check"></i></button>
            <button className="content-link"><span>Deutsch</span><i className="fas fa-check"></i></button>
            <button className="content-link"><span>English - UK</span><i className="fas fa-check"></i></button>
            <button className="content-link"><span>Español</span><i className="fas fa-check"></i></button>
            <button className="content-link active"><span>Français</span><i className="fas fa-check"></i></button>
            <button className="content-link"><span>Italiano</span><i className="fas fa-check"></i></button>
            <button className="content-link"><span>Nederlands</span><i className="fas fa-check"></i></button>
            <button className="content-link"><span>Polski</span><i className="fas fa-check"></i></button>
            <button className="content-link"><span>Português</span><i className="fas fa-check"></i></button>
          </div>
        </div>
        <div className="usm-theme">
          <div className="header" onClick={() => handleUsmHome()}>
            <div className="icon"><i className="fas fa-chevron-left"></i></div>
            <div className="text"><span>Thèmes</span></div>
          </div>
          <div className="content-theme">
            <button className="content-link-theme lght"><span>Light</span><i className="fas fa-check"></i></button>
            <button className="content-link-theme drk"><span>Dark</span><i className="fas fa-check"></i></button>
            <button className="content-link-theme drk-rd"><span>Dark Red</span><i className="fas fa-check"></i></button>
            <button className="content-link-theme drk-bl active-drk-bl"><span>Dark Blue</span><i className="fas fa-check"></i></button>
            <button className="content-link-theme drk-prpl"><span>Dark Purple</span><i className="fas fa-check"></i></button>
          </div>
        </div>
    </div>
  )
}

export default UserSettingsModal
