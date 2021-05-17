import React, { useEffect, useState } from 'react'
import axios from 'axios'
import cookie from "js-cookie"

const Logout = () => {
  const [isLoading, setIsLoading] = useState(true)

  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 })
    }
  }

  useEffect(() => {
    const logout = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}api/user/logout`,
        withCredentials: true
      })
        .then(() => removeCookie('jwt'))
        .catch((err) => console.log(err))

      window.location = '/'
      setIsLoading(false)
    }
    logout()
  }, [])
  
  return (
    <div className="app">
      {isLoading && (
        <div className="loader">
          <div className="loader-bar"></div>
          <div className="loader-bar-2"></div>
        </div>
      )}
    </div>
  )
}

export default Logout
