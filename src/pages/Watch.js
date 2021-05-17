import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AsideBar from '../components/NavigationBar/AsideBar'
import { isEmpty } from '../components/Utils'
import VideoPlayer from '../components/VideosComponent/VideoPlayer'

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
      <div className="video-container">
        <div className="video-player">
          
          <VideoPlayer/>
          {/* <video-js data-setup='{}'>
            <source src="./public/videos/test.mp4" type="video/mp4" />
          </video-js> */}
        </div>
      </div>
      <AsideBar/>
    </div>
  )
}

export default Watch
