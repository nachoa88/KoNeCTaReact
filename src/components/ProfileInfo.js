import React from 'react';

function ProfileInfo() {
  return (
    <div className="d-flex mb-3">
      <div className="profile-img-container">
        <img src="./img/Graffitti.jpeg" className="img-fluid" alt="Profile Picture" />
      </div>
      <div className="profile-personal">
        <h4>Personal Information</h4>
        <ul className="list-unstyled">
          <li>
            <span className="profile-label">Username:</span>
            <span className="profile-value">name1234</span>
          </li>
          <li>
            <span className="profile-label">Birthday:</span>
            <span className="profile-value">18/09/2015</span>
          </li>
          <li>
            <span className="profile-label">Tokens:</span>
            <span className="profile-value">20</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileInfo;
