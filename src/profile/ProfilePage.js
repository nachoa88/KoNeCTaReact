import React from 'react';
import Navbar from './components/Navbar';
import ProfileInfo from './components/ProfileInfo';
import ButtonRow from './components/ButtonRow';
import AboutMe from './components/AboutMe';
import Hobbies from './components/Hobbies';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';

import './css/Style.css';
import './css/Profile.css';

function ProfilePage() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ProfileInfo />
            <ButtonRow />
            <AboutMe />
            <Hobbies />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <CardContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
