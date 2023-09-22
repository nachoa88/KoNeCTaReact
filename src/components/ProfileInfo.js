function ProfileInfo() {
  return (
    <div className="d-flex mb-3" id= "profileInfo">
      <div className="profile-img-container">
        <img src="./img/Avatar.png" className="img-fluid" id="userAvatar" alt="Profile" />
      </div>
      <div className="profile-personal">
        <h3>My Name</h3>
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
