import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleSideBar } from '../../actions/userActions'
import { getUsers } from '../../actions/usersActions'
import { isEmpty } from '../Utils'
import AuthModalContainer from './AuthModalContainer'

const AsideBar = () => {
  const [isLoading, setIsLoading] = useState(true)
  const ulc = useSelector((state) => state.ulcReducer)
  const [asideBar, setAsideBar] = useState(null)
  const userData = useSelector((state) => state.userReducer)
  const usersData = useSelector((state) => state.usersReducer)
  const dispatch = useDispatch()
  const ruData = useSelector((state) => state.ruReducer)

  const [loadCount, setLoadCount] = useState(5)
  const [followCount, setFollowCount] = useState(7)
  const [loadRu, setLoadRu] = useState(true)

  const [authModal, setAuthModal] = useState(false)
  const [authModalPage, setAuthModalPage] = useState(null)
  const refToggleAuthModal = useRef(null)

  const handleAuthModal = (props) => {
    setAuthModal(!authModal)
    setAuthModalPage(props)
  } 

  // console.log(ulc);
  const toggleAside = () => {
    dispatch(toggleSideBar(ulc.tokenId))
  }

  const loadMinusRu = () => {
    setLoadCount(loadCount - 10)
    setLoadRu(true)
  }

  const loadMoreFollow = () => {
    setFollowCount(followCount + 7)
  }

  const loadMinusFollow = () => {
    setFollowCount(followCount - 7)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (refToggleAuthModal.current && !refToggleAuthModal.current.contains(event.target)) {
        setAuthModal(false)
      }
    }
    if (loadRu) {
      dispatch(getUsers(loadCount))
      setLoadRu(false)
      setLoadCount(loadCount + 5)
    }
    if (!isEmpty(userData) && !isEmpty(usersData)) {
      setIsLoading(false)
    }
    if (!isEmpty(ulc)) {
      setAsideBar(ulc.sideBarIsOpen)
      setIsLoading(false)
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [ulc, userData, usersData, dispatch, loadCount, loadRu])

  return (
    <>
    <div className={asideBar ? "aside-container" : "aside-container small-aside-container"}>
      {isLoading ? (
        <div className="loader">
          <div className="loader-bar"></div>
          <div className="loader-bar-2"></div>
        </div>
      ) : (
        <>
          {isEmpty(userData) ? (
            <div className="not-connect">
              <div className="title">
                <h3>Connectez-vous pour voir vos abonnements</h3>
                <div className="handle-tab-container">
                  <div className="handle-tab" onClick={() => toggleAside()}>
                    {asideBar ? (
                      <i className="fas fa-angle-double-right"></i>
                    ) : (
                      <i className="fas fa-angle-double-left"></i>
                    )}
                  </div>
                </div>
              </div>
              <div className="btn-login" onClick={() => handleAuthModal("login")}>Se connecter</div>
            </div>
          ) : (
            <div className='subs-handle-tab'>
              {!isEmpty(userData.following) ? (
                <div className="subs-container">
                  <div className="title">
                    <h3>Abonnements</h3>
                    <div className="handle-tab" onClick={() => toggleAside()}>
                      {asideBar ? (
                        <i className="fas fa-angle-double-right"></i>
                      ) : (
                        <i className="fas fa-angle-double-left"></i>
                      )}
                    </div>
                    <div className="icon-small">
                      <i className="far fa-heart"></i>
                    </div>
                  </div>
                  {usersData.map((user) => {
                    return(
                      <div key={user._id}>
                        {userData.following.map((userFollowed, index) => {
                          return(
                            <div key={userFollowed}>
                              {followCount > index && (
                                <>
                                  {user._id === userFollowed && (
                                    <Link to={"/" + user.username} className="user-sub">
                                      <div className="user-picture">
                                        <img src={"http://localhost:3000" + user.picture} alt=''/>
                                      </div>
                                      <p>{user.username}</p>
                                    </Link>
                                  )}
                                </>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                  <div className="loads">
                    {followCount <  userData.following.length && (
                      <div className="load" onClick={() => loadMoreFollow()}>
                        <p>Afficher plus</p>
                        <i className="fas fa-plus"></i>
                      </div>
                    )}
                    {followCount > 7 && (
                      <div className="load sl" onClick={() => loadMinusFollow()}>
                        <p>Afficher moins</p>
                        <i className="fas fa-minus"></i>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="handle-tab" onClick={() => toggleAside()}>
                  {asideBar ? (
                    <i className="fas fa-angle-double-right"></i>
                  ) : (
                    <i className="fas fa-angle-double-left"></i>
                  )}
                </div>
              )}
            </div>
          )}
          <div className="discover-container">
            <h3>Créateurs Recommandés</h3>
            <div className="icon-small">
              <i className="far fa-compass"></i>
            </div>
            {!isEmpty(ruData) && (
              <>
                {ruData.map((user) => {
                  return (
                    <Link to={"/" + user.username} key={user._id} className="user-to-discover">
                      <div className="user-picture">
                        <img src={"http://localhost:3000" + user.picture} alt='' />
                      </div>
                      <p>{user.username}</p>
                    </Link>
                  )
                })}
              </>
            )}
            <div className="loads">
              {ruData.length <  usersData.length && (
                <div className="load" onClick={() => setLoadRu(true)}>
                  <p>Afficher plus</p>
                  <i className="fas fa-plus"></i>
                </div>
              )}
              {ruData.length > 5 && (
                <div className="load sl" onClick={() => loadMinusRu()}>
                  <p>Afficher moins</p>
                  <i className="fas fa-minus"></i>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
    {authModal && (
      <div className="auth-modal" ref={refToggleAuthModal}>
        <AuthModalContainer authModalPage={authModalPage} onChange={() => setAuthModal(!authModal)} />
      </div>
    )}
    </>
  )
}

export default AsideBar
