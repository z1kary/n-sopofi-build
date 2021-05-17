import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Routes from './components/Routes'
import axios from 'axios'
import { getUserById, getUserByToken } from './actions/userActions'
import { isEmpty } from './components/Utils';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const ulc = useSelector((state) => state.ulcReducer)
  const userData = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isEmpty(userData)) {
      const fetchJwt = async () => {
        await axios ({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}jwtid`,
          withCredentials: true
        })
        .then((res) => {
          if (!isEmpty(res.data)) {
            dispatch(getUserById(res.data._id))
            setIsLoading(false)
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false)
        })
      }
      fetchJwt() 
    }
    if (isEmpty(ulc)) {
      const fetchUlc = async () => {
        await axios ({
          method: 'get',
          url: `${process.env.REACT_APP_API_URL}ulcid`,
          withCredentials: true
        })
        .then((res) => {
          if (!isEmpty(res.data)) {
            dispatch(getUserByToken(res.data.tokenId))
            setIsLoading(false)
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false)
        })
      }
      fetchUlc() 
    }
    console.log(navigator.language);
    // console.log(navigator);
  }, [dispatch, ulc, userData])

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <div className="loader-bar"></div>
          <div className="loader-bar-2"></div>
        </div>
      ) : (
        <Routes />
      )}
    </>
  )
}

export default App
