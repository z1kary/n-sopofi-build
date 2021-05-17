import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unfollowUser } from '../actions/userActions'
import { isEmpty } from './Utils'

const FollowBtn = ({ idToHandle }) => {
  const userData = useSelector((state) => state.userReducer)
  const [isFollowed, setIsFollowed] = useState(false)
  const dispatch = useDispatch()

  const handleFollow = () => {
    if (!isEmpty(userData)) {
      dispatch(followUser(userData._id, idToHandle))
    }
    setIsFollowed(true)
  }

  const handleUnfollow = () => {
    if (!isEmpty(userData)) {
      dispatch(unfollowUser(userData._id, idToHandle))
    }
    setIsFollowed(false)
  }

  useEffect(() => {
    if (!isEmpty(userData.following)) {
      if (userData.following.includes(idToHandle)) {
        setIsFollowed(true)
      } else setIsFollowed(false)
    }
  }, [userData, idToHandle])

  return (
    <>
    {isFollowed && !isEmpty(userData) && (
      <div className="btn btn-second" onClick={() => handleUnfollow()}>Suivi</div>
    )}
    {isFollowed === false && !isEmpty(userData) && (
      <div className="btn" onClick={() => handleFollow()}>Suivre</div>
    )}
    </>
  )
}

export default FollowBtn
