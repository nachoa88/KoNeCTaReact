import React from 'react';

function ProfileInfo() {
  return (
    <div className="d-flex mb-3">
      <div className="profile-img-container">
        <img src="./img/Graffitti.jpeg" className="img-fluid" alt="Profile Picture" />
      </div>
      <div className="profile-personal">
        <h4>Personal</h4>
        <ul className="list-unstyled">
          <li><strong>Username:</strong> name1234</li>
          <li><strong>Birthday:</strong> 18/09/2015</li>
          <li><strong>Tokens:</strong> 20</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileInfo;
