import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import ButtonRow from '../components/ButtonRow';
import AboutMe from '../components/AboutMe';
import Hobbies from '../components/Hobbies';
import EventList from "../components/EventList.js";

import '../components/css/Profile.css';
import '../components/css/ProfileInfo.css';
import '../components/css/Button.css';

function ProfilePage() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <ProfileInfo />
            <ButtonRow />
            <AboutMe />
            <Hobbies />
          </div>
          <div className="col-md-6">
            {/*Como ahora event list tiene como parámetro un valor de filtro y la página profile no usa filtro, 
            debemos pasar un valor vacío para que muestre todos los eventos*/}
            <EventList filterValue={""}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
