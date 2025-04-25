import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications";
import "../index.css";
import Courses from "./Courses";
import SocialProfiles from "./SocialProfiles";
import Title from "./TitleWithHooks";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Title></Title>
          <div className="column">
            <Profile></Profile>
          </div>
          <div className="column">
            <Qualifications></Qualifications>
          </div>
        </div>
        <hr />
        <Courses></Courses>
        <hr />
        <SocialProfiles></SocialProfiles>
      </div>
    );
  }
}

export default App;
