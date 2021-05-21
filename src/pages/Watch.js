import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AsideBar from '../components/NavigationBar/AsideBar'
import { isEmpty } from '../components/Utils'

const Watch = () => {
  const [sbio, setSbio] = useState(null)
  const ulc = useSelector((state) => state.ulcReducer)

  useEffect(() => {
    if (!isEmpty(ulc)) {
      setSbio(ulc.sideBarIsOpen)
    }
  }, [ulc])
  
  return (
    <div className={sbio ? "small-app app" : "app"}>
      <div className="watch-container">
        <div className="video-played-container">
          <video src="http://localhost:3000/videos/test.mp4" className="video-player">
            <div id="video-controls" className="controls">
              <button id="playpause" type="button" data-state="play">Play/Pause</button>
              <button id="stop" type="button" data-state="stop">Stop</button>
              <div className="progress">
                  <progress id="progress" value="0" min="0">
                    <span id="progress-bar"></span>
                  </progress>
              </div>
              <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
              <button id="volinc" type="button" data-state="volup">Vol+</button>
              <button id="voldec" type="button" data-state="voldown">Vol-</button>
              <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
            </div>
          </video>

        </div>
        <div className="others-videos">
          <div className="title">
            <p>Username videos</p>
          </div>
          <div className="o-videos">
            <div className="bg-video"></div>
            <div className="title-o-video">
              <p>Titre de la vidéo</p>
            </div>
          </div>
          <div className="o-videos">
            <div className="bg-video"></div>
            <div className="title-o-video">
              <p>Titre de la vidéo</p>
            </div>
          </div>
          <div className="o-videos">
            <div className="bg-video"></div>
            <div className="title-o-video">
              <p>Titre de la vidéo</p>
            </div>
          </div>
          <div className="o-videos">
            <div className="bg-video"></div>
            <div className="title-o-video">
              <p>Titre de la vidéo</p>
            </div>
          </div>
        </div>
      </div>
      <AsideBar/>
    </div>
  )
}

export default Watch
