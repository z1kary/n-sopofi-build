import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '../../components/Utils';
import axios from 'axios'
import cookie from 'js-cookie'
import { deleteUser } from '../../actions/userActions';

const ProfileSettings = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [bio, setBio] = useState(null)
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const removeCookie = (key) => {
    if (window !== "undefined") {
      cookie.remove(key, { expires: 1 })
    }
  }

  const logout = async () => {
      await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_URL}api/user/logout`,
        withCredentials: true
      })
        .then(() => removeCookie('jwt'))
        .catch((err) => console.log(err))

      window.location = '/'
    }

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);

    // dispatch(uploadPicture(data, userData._id));
  };

  const disableAccount = () => {
    dispatch(deleteUser(userData._id))
    logout()
  }

  const updateAccount = () => {

  }

  useEffect(() => {
    if (!isEmpty(userData)) {
      if (!isEmpty(userData.bio)) {
        setBio(userData.bio)
      }
      setIsLoading(false)
    }
  }, [userData])

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <div className="loader-bar"></div>
          <div className="loader-bar-2"></div>
        </div>
      ) : (
        <>
          <h3>Photo de profil</h3>
          <div className="sc-container">
            <form action="" onSubmit={handlePicture}>
              <div className="user-picture">
                <img src={"http://localhost:3000" + userData.picture} alt=""/>
              </div>
              <div className="col">
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <p>L'image doit être au format JPEG, PNG ou GIF et ne doit pas dépasser 10 Mo.</p>
              </div>

            </form>
          </div>

          <h3 className="sc-title">Bannière de profil</h3>
          <div className="sc-container">
            <form action="" onSubmit={handlePicture}>
              <div className="banner-picture">
                <img src="" alt=""/>
              </div>
              <div className="col">
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <p>Format de fichier : JPEG, PNG, GIF (recommandé 1200x480, 10 Mo maximum)</p>
              </div>

            </form>
          </div>

          <h3 className="sc-title">Paramètres du profil</h3>
          <p className="sc-subtitle">Modifiez les informations d'itentification de votre compte</p>
          <form className="sc-form">
            <div className="sc-row">
              <p>Identifiant</p>
              <div className="sc-col">
                <input type="text" onChange={(e) => setUsername(e.target.value)} defaultValue={userData.username}/>
              </div>
            </div>
            <div className="sc-row">
              <p>Bio</p>
              <div className="sc-col">
                <textarea type="text" onChange={(e) => setBio(e.target.value)} defaultValue={userData.bio}></textarea>
                <p>Description de votre chaîne À propos sur la page de votre chaîne en moins de 300 caractères</p>
              </div>
            </div>
            <div className="sc-last-row">
              {isEmpty(bio) && isEmpty(username) ? (
                <div className="disactive">Enregistrer les modifications</div>
              ) : (
                <button type="submit" onClick={() => updateAccount()}>Enregistrer les modifications</button>
              )}
            </div>
          </form>
          <h3 className="sc-title">Désactiver votre compte Sopofi</h3>
          <p className="sc-subtitle">Désactive totalement votre compte</p>
          <div className="sc-container">
            <div className="row">
              <div className="sc-btn" onClick={() => disableAccount()}>Désactiver mon compte</div>
              <p>Attention ! La désactivation de votre compte est définitive.</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProfileSettings
