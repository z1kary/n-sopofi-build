import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FollowBtn from './FollowBtn'
import { isEmpty } from './Utils'

const ChannelNavbar = () => {
  const userData = useSelector((state) => state.userReducer)
  const userChannelData = useSelector((state) => state.userChannelReducer)

  useEffect(() => {

  }, [])

  return (
    <div className="channel-navbar">
      <div className="left">
        <div className="user-picture">
          <img src={userChannelData.picture} alt=""/>
        </div>
        <div className="user-infos">
          <h3>{userChannelData.username}</h3>
          <p>{isEmpty(userChannelData.followers) ? (<>0 abonné</>) : (<>{userChannelData.followers.length} abonnés</>)}</p>
        </div>
      </div>
      <div className="center">
        <div className="channel-navlinks-container">
          <div className="channel-navlink">
            <h3>Accueil</h3>
          </div>
          <div className="channel-navlink">
            <h3>Vidéos</h3>
          </div>
          <div className="channel-navlink">
            <h3>Playlists</h3>
          </div>
          <div className="channel-navlink">
            <h3>À Propos</h3>
          </div>
        </div>
      </div>
      {!isEmpty(userData) && (
        <>
          {userData._id === userChannelData._id ? (
            <Link to={"dashboard/" + userData.username + "/home"} className="btn-add-video"><i className="fas fa-plus"></i> Ajouter une vidéo</Link>
          ) : (
            <div className="right">
              <FollowBtn idToHandle={userChannelData._id} />
              <div className="btn">S'abonner</div>
              <div className="btn btn-second">Faire un don</div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default ChannelNavbar
