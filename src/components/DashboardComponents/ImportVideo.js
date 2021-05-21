import React, { useEffect, useRef } from 'react'
import UploadForm from './UploadForm'
import UploadVideo from './UploadVideo'

const ImportVideo = (props) => {
  const refModalImportVideo = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
     if (refModalImportVideo.current && !refModalImportVideo.current.contains(event.target)) {
        props.onChange()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
  }, [props])
  return (
      <div className="ivc" ref={refModalImportVideo}>
        <div className="header">
          <h2>Importer une vidéo</h2>
          <div className="btn-close" onClick={() => props.onChange()}><i className="fas fa-times"></i></div>
        </div>
        <div className="ivc-container">
          <UploadForm />
        </div>
      </div>
  )
}

export default ImportVideo
