import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AsideBar from '../components/NavigationBar/AsideBar'
import { isEmpty } from '../components/Utils'

const Explore = () => {
  const [sbio, setSbio] = useState(null)
  const ulc = useSelector((state) => state.ulcReducer)

  useEffect(() => {
    if (!isEmpty(ulc)) {
      setSbio(ulc.sideBarIsOpen)
    }
  }, [ulc])

  return (
    <div className={sbio ? "small-app app" : "app"}>
      <div className="explore-container">
        
      </div>
      <AsideBar/>
    </div>
  )
}

export default Explore
