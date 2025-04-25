import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

class SocialProfiles extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Contact Me</h3>
        {SOCIAL_PROFILES.map((PROFILE) => {
          return <SocialProfile key={PROFILE.id} socialProfile={PROFILE} />;
        })}
      </div>
    );
  }
}

class SocialProfile extends React.Component {
  render() {
    const { link, image } = this.props.socialProfile;
    return (
      <a href={link}>
        <img src={image} alt="social" style={{ width: 20, margin: 5 }}></img>
      </a>
    );
  }
}
export default SocialProfiles;
