import React, { useEffect, useState } from "react";

const TITLES = [
  "a Software Engineer",
  "Front-End Developer",
  "Back-End Developer",
];

const TitleWithHooks = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    let timeout = null;
    let titleIntervel = null;
    titleIntervel = setInterval(() => {
      const index = (titleIndex + 1) % TITLES.length;
      setTitleIndex(index);
      setFadeIn(true);
      timeout = setTimeout(() => {
        setFadeIn(false);
      }, 2000);
    }, 4000);
    timeout = setTimeout(() => {
      setFadeIn(false);
    }, 2000);
    return function cleanup() {
      clearInterval(titleIntervel);
      clearTimeout(timeout);
    };
  }, [titleIndex]);
  return (
    <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
      I'm {TITLES[titleIndex]}
    </p>
  );
};

export default TitleWithHooks;
