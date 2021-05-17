import React, { useEffect, useState } from 'react'
import AllVideos from '../components/VideosComponent/AllVideos'
import AsideBar from '../components/NavigationBar/AsideBar'
import { isEmpty } from '../components/Utils'
import { useSelector } from 'react-redux'

const Videos = () => {
  const [sbio, setSbio] = useState(null)
  const ulc = useSelector((state) => state.ulcReducer)

  useEffect(() => {
    if (!isEmpty(ulc)) {
      setSbio(ulc.sideBarIsOpen)
    }
  }, [ulc])

  return (
    <div className={sbio ? "small-app app" : "app"}>
      <div className="page-container">
        <AllVideos/>
      </div>
      <AsideBar/>
    </div>
  )
}

export default Videos
