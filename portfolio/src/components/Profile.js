import React from "react";
import profilePicture from "../assets/Personal Profile Photo.png";

class Profile extends React.Component {
  constructor() {
    super();

    this.state = { dispalyBio: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    // if (this.state.dispalyBio) {
    //   this.setState({ dispalyBio: false });
    // } else {
    //   this.setState({ dispalyBio: true });
    // }
    this.setState({ dispalyBio: !this.state.dispalyBio });
  }
  render() {
    return (
      <div>
        <img src={profilePicture} className="profile" alt="profile"></img>
        <h1>Hello</h1>
        <p>My Name is Mahmoud, Software Engineer</p>
        {this.state.dispalyBio ? (
          <div>
            <p>Dedicated and versatile software engineer</p>
            <p>proven track record in architecting</p>
            <button onClick={this.toggle} className="btn">
              Hide
            </button>
          </div>
        ) : (
          <button onClick={this.toggle} className="btn">
            Show More
          </button>
        )}
      </div>
    );
  }
}

export default Profile;
