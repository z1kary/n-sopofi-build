import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ImportVideo from '../../components/DashboardComponents/ImportVideo'
import { isEmpty } from '../../components/Utils'

const DashboardHome = () => {
  const [importVideo, setImportVideo] = useState(false)
  const userData = useSelector((state) => state.userReducer)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isEmpty(userData)) {
      setIsLoading(false)
    }
  }, [userData])
  
  return (
    <>
      <div className="app">
        {isLoading ? (
          <div className="loader">
            <div className="loader-bar"></div>
            <div className="loader-bar-2"></div>
          </div>
        ) : (
          <div className="dc">
            <h2>Tableau de bord de la chaîne</h2>
            <div className="dashboard-container">
              <div className="dcc">
                <div className="btn" onClick={() => setImportVideo(true)}>Importer des vidéos</div>
              </div>
              <div className="dcc">
                <div className="header">
                  <h3>Données analytiques de la chaîne</h3>
                  <div className="subtitle">Abonnés actuels</div>
                  <p>{userData.followers.length}</p>
                </div>

                <div className="btn-second">Données d'analyse de la chaîne</div>
              </div>
            </div>

          </div>
        )}
      </div>
      {importVideo && (
        <div className="import-video-container">
          <ImportVideo onChange={() => setImportVideo(false)}/>
        </div>
      )}
    </>
  )
}

export default DashboardHome
