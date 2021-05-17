import React from 'react'

const Music = () => {
  return (
    <div className="music-page">
      
      <div className="music-player">
        <div className="left">
          <div className="music-bg"></div>
          <div className="music-infos">
            <h3>Musique</h3>
            <p>Username</p>
          </div>
          <div className="like">
            <i className="fas fa-heart"></i>
          </div>
          <div className="add">
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <div className="center">
          <div className="music-controls">
            <div className="skip-track back">
              {/* <svg><g><path d="M222.902,147.886L41.783,23.923c-8.174-5.588-18.775-6.201-27.533-1.586C5.478,26.971,0,36.065,0,45.962v244.879c0,9.941,5.508,19.053,14.328,23.654c8.802,4.617,19.42,3.955,27.594-1.709l181.104-125.564c6.45-4.479,10.297-11.85,10.266-19.699C233.275,159.66,229.383,152.319,222.902,147.886z"/><path d="M305.484,9.502c-17.406,0-31.518,14.112-31.518,31.519v254.96c0,17.407,14.111,31.519,31.518,31.519c17.407,0,31.518-14.111,31.518-31.519V41.021C337.002,23.615,322.892,9.502,305.484,9.502z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> */}
              <i className="fas fa-backward"></i>
            </div>
            <div className="play-pause">
              {/* <svg><g><path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> */}
              <i className="fas fa-play-circle"></i>
            </div>
            <div className="skip-track">
              {/* <svg><g><path d="M222.902,147.886L41.783,23.923c-8.174-5.588-18.775-6.201-27.533-1.586C5.478,26.971,0,36.065,0,45.962v244.879c0,9.941,5.508,19.053,14.328,23.654c8.802,4.617,19.42,3.955,27.594-1.709l181.104-125.564c6.45-4.479,10.297-11.85,10.266-19.699C233.275,159.66,229.383,152.319,222.902,147.886z"/><path d="M305.484,9.502c-17.406,0-31.518,14.112-31.518,31.519v254.96c0,17.407,14.111,31.519,31.518,31.519c17.407,0,31.518-14.111,31.518-31.519V41.021C337.002,23.615,322.892,9.502,305.484,9.502z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> */}
              <i className="fas fa-forward"></i>
            </div>
          </div>
          <div className="music-timeline">
            <div className="time">
              <p>5:00</p>
            </div>
            <div className="timeline">
              <div className="timeline-time"></div>
              <div className="timeline-basic"></div>
            </div>
            <div className="time">
              <p>10:00</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="left-container">
            <div className="btn">
              <i className="fas fa-random"></i>
            </div>
            <div className="btn">
              <i className="fas fa-volume-up"></i>
            </div>
            <div className="btn">
              <i className="fas fa-headphones"></i>
            </div>
          </div>
          <div className="right-container">
            <div className="bg-music"></div>
            <div className="music-name">File d'attente</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Music
