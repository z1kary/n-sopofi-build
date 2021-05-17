import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const AllVideos = () => {
  const refVideosContainer = useRef(null)

  const handleHoverVideo = (props) => {

  }
  return (
    <div className="videos-content" ref={refVideosContainer}>
      <Link to="/watch/" className="video-container" onMouseMove={handleHoverVideo(1)}>
        <div className="bg-image">
        </div>
        <div className="video-infos">
          {/* <img className="bg-infos" src="./uploads/pp/bg-video-3.jpeg" alt=""/> */}
          <div className="left-container">
            <div className="user-picture">
              <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
            </div>
          </div>
          <div className="right-container">
            <div className="video-name">
              <h3>Titre de la vidéooo o o o o o o o o o oooo ooooo zzzzz zzz z z zzzzzz zz zzzz z zzzz zz zzzzz z zzz z zzzzert ytrfrg t h</h3>
              <div className="more">
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <p>Username</p>
          </div>
        </div>
      </Link>
      <Link to="/watch/" className="video-container">
        <div className="bg-image">
        </div>
        <div className="video-infos">
          {/* <img className="bg-infos" src="./uploads/pp/bg-video.jpeg" alt=""/> */}
          <div className="left-container">
            <div className="user-picture">
              <img src="./uploads/pp/photo-random-2.jpeg" alt=""/>
            </div>
          </div>
          <div className="right-container">
            <div className="video-name">
              <h3>Titre de la vidéo</h3>
              <div className="more">
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <p>Username</p>
          </div>
        </div>
      </Link>
      <Link to="/watch/" className="video-container">
        <div className="bg-image">
        </div>
        <div className="video-infos">
          {/* <img className="bg-infos" src="./uploads/pp/bg-video-2.jpeg" alt=""/> */}
          <div className="left-container">
            <div className="user-picture">
              <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
            </div>
          </div>
          <div className="right-container">
            <div className="video-name">
              <h3>Titre de la vidéo</h3>
              <div className="more">
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <p>Username</p>
          </div>
        </div>
      </Link>
      <Link to="/watch/" className="video-container">
        <div className="bg-image">
        </div>
        <div className="video-infos">
          {/* <img className="bg-infos" src="./uploads/pp/bg-video-4.jpeg" alt=""/> */}
          <div className="left-container">
            <div className="user-picture">
              <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
            </div>
          </div>
          <div className="right-container">
            <div className="video-name">
              <h3>Titre de la vidéo</h3>
              <div className="more">
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <p>Username</p>
          </div>
        </div>
      </Link>
      <Link to="/watch/" className="video-container">
        <div className="bg-image">
        </div>
        <div className="video-infos">
          <div className="left-container">
            <div className="user-picture">
              <img src="./uploads/pp/photo-random-2.jpeg" alt=""/>
            </div>
          </div>
          <div className="right-container">
            <div className="video-name">
              <h3>Titre de la vidéo</h3>
              <div className="more">
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>
            <p>Username</p>
          </div>
        </div>
      </Link>
      <Link to="/watch/" className="video-container">
        <div className="bg-image">
        </div>
        <div className="video-infos">
          <div className="left-container">
            <div className="user-picture">
              <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
            </div>
          </div>
          <div className="right-container">
            <div className="video-name">
              <h3>Titre de la vidéo</h3>
            </div>
            <p>Username</p>
          </div>
        </div>
      </Link>
      <Link to="/watch/" className="video-container">
        <div className="bg-image">
        </div>
        <div className="video-infos">
          <div className="left-container">
            <div className="user-picture">
              <img src="./uploads/pp/photo-random-3.jpeg" alt=""/>
            </div>
          </div>
          <div className="right-container">
            <div className="video-name">
              <h3>Titre de la vidéo</h3>
            </div>
            <p>Username</p>
          </div>
        </div>
      </Link>
      <Link to="/watch/" className="video-container">
        <div className="bg-image">
        </div>
        <div className="video-infos">
          <div className="left-container">
            <div className="user-picture">
              <img src="./uploads/pp/photo-random-1.jpeg" alt=""/>
            </div>
          </div>
          <div className="right-container">
            <div className="video-name">
              <h3>Titre de la vidéo</h3>
            </div>
            <p>Username</p>
          </div>
        </div>
      </Link>

      
    </div>
  )
}

export default AllVideos
