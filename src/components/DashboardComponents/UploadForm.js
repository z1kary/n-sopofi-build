import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { isEmpty } from '../Utils';

const UploadForm = () => {
  const [files, setFiles] = useState() 
  const [isLoading, setIsLoading] = useState(true)

  const uploadVideo = (file) => {

  }

  const maxSelectFile = (event) => {
    let files = event.target.files;
    if (files.length > 1) {
      toast.error('Maximum 1 file is allowed');
      event.target.value = null;
      return false;
    } else {
      let err = '';
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > 52428800) { // 50 MB
          err += files[i].name + ', ';
        }
      }
      if (err !== '') {
        // error caught
        event.target.value = null;
        toast.error(err + " is/are too large. Please select file size < 50Mb");
      }
    }
    return true;
  }

  const fileChangeHandler = (event) => {
    const files = event.target.files;
    if (maxSelectFile(event)) {
      setFiles(files)
      setIsLoading(false)
    }
  }

  const fileUploadHandler = async (event) => {
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append('file', files[i]);
    }
    await axios ({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/videos/upload`,
      withCredentials: true
    })
    .then(res => {
      toast.success('Upload Successful');
    }).catch(err => {
      toast.error(`Upload Fail with status: ${err.statusText}`);
    });
      // headers: {
        // 'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
      // }
  }

  useEffect(() => {
    if (!isEmpty(files)) {
      uploadVideo(files)
    }
    console.log(files);
  }, [files])

  return (
    <div className="upload-form">
      <div className="form-group">
        <ToastContainer />
      </div>

      {isEmpty(files) && (
        <form className="form-container">
          <label htmlFor="file" className="btn-icon"><i className="fas fa-upload"></i></label>
          <label htmlFor="file" className="btn-upload">
            <p>Sélectionner des fichiers</p>
          </label>
          <input
            type="file"
            name="file"
            id='file'
            className="form-control"
            multiple="multiple"
            accept="video/*"
            onChange={(e) => setFiles(e.target.files[0])} />
          {/* <Progress max="100" color="success" value={this.state.loaded} className="mt-4 mb-1">
            {isNaN(Math.round(this.state.loaded, 2)) ? 0 : Math.round(this.state.loaded, 2)}%
          </Progress> */}
          {/* <button
            type="button"
            className="btn btn-success btn-block"
            onClick={(e) => fileUploadHandler(e)}>Upload Video
          </button> */}
        </form>
      )}{!isEmpty(files) && (
        <form>
          <h2>test</h2>
        </form>
      )}
      
    </div>
  )
}

export default UploadForm
