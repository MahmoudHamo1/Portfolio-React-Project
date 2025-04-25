import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const style = { display: "inline-block", margin: 10, marginBottom: 30 };
  return (
    <div>
      <div>
        <h3 style={style}>
          <Link to="/">Home</Link>
        </h3>
        <h3 style={style}>
          <Link to="/amthal">Amthal</Link>
        </h3>
        <h3 style={style}>
          <Link to="/gallery">Gallery</Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
