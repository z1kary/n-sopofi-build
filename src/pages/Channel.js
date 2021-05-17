import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserChannel } from '../actions/userActions'
import AllVideos from '../components/VideosComponent/AllVideos'
import AsideBar from '../components/NavigationBar/AsideBar'
import { isEmpty } from '../components/Utils'
import ChannelNavbar from '../components/ChannelNavbar'

const Channel = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const [sbio, setSbio] = useState(null)
  const ulc = useSelector((state) => state.ulcReducer)
  const userChannelData = useSelector((state) => state.userChannelReducer)
  
  const dispatch = useDispatch()

  useEffect(() => {
    const userChannel = props.location.pathname.replace('/', '')
    if (isEmpty(userChannelData) || userChannel !== userChannelData.username) {
      const fetchUser = async () => {
        dispatch(getUserChannel(userChannel))
      } 
      fetchUser()
    }
    if (!isEmpty(ulc) && !isEmpty(userChannelData)) {
      setIsLoading(false)
    }
    if (!isEmpty(ulc)) {
      setSbio(ulc.sideBarIsOpen)
    }
    console.log("reset channel");
  }, [ulc, dispatch, props, userChannelData])

  return (
    <div className={sbio ? "small-app app" : "app"}>
      {isLoading ? (
        <div className="loader">
          <div className="loader-bar"></div>
          <div className="loader-bar-2"></div>
        </div>
      ) : (
        <>
          <div className="channel-container">
            <div className="bg-user">

            </div>
            <div className="channel-content">
              <ChannelNavbar />
              <div className="channel-videos">
                <AllVideos/>
              </div>
            </div>
          </div>
        </>
      )}
      <AsideBar/>
    </div>
  )
}

export default Channel
