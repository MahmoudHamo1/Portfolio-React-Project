import React, { Component } from "react";

class Amthal extends Component {
  constructor() {
    super();
    this.state = { mathal: {}, amthal: [] };

    // this.fetchAmthal = this.fetchAmthal.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3001/amthal/random")
      .then((response) => response.json())
      .then((json) => this.setState({ mathal: json }));
  }

  fetchAmthal = () => {
    fetch("http://localhost:3001/amthal/ten")
      .then((response) => response.json())
      .then((json) => this.setState({ amthal: json }));
  };
  render() {
    return (
      <div>
        <h2>Mathal of the Day</h2>
        <p>{this.state.mathal.title}</p>
        <hr></hr>
        <h3>هل تريد المزيد من الامثال ؟</h3>
        <button className="btn" onClick={this.fetchAmthal}>
          Amthal
        </button>
        {this.state.amthal.map((mathal) => {
          return <p key={mathal.id}>{mathal.title}</p>;
        })}
      </div>
    );
  }
}

export default Amthal;
