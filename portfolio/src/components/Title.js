import React from "react";

const TITLES = [
  "a Software Engineer",
  "Front-End Developer",
  "Back-End Developer",
];

class Title extends React.Component {
  constructor() {
    super();

    this.state = { titleIndex: 0, fadeIn: true };
  }
  componentDidMount() {
    this.animateTitle();
    setTimeout(() => {
      this.timeout = this.setState({ fadeIn: false });
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.titleIntervel);
    clearTimeout(this.timeout);
  }

  animateTitle() {
    this.titleIntervel = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex: titleIndex, fadeIn: true });
      this.timeout = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 2000);
    }, 4000);
  }
  render() {
    return (
      <p className={this.state.fadeIn ? "title-fade-in" : "title-fade-out"}>
        I'm {TITLES[this.state.titleIndex]}
      </p>
    );
  }
}

export default Title;
