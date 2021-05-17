import React from 'react'

const NotifsModal = (props) => {
  return (
    <div className="notifs-modal-container">
      <div className="header">
        <h3>Notifications</h3>
        <div className="settings">
          <i className="fas fa-cog"></i>
        </div>
        <div className="close" onClick={() => props.onChange()}>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className="notifs-content">
        <p>Vous n'avez aucune notifications !</p>
      </div>
    </div>
  )
}

export default NotifsModal
