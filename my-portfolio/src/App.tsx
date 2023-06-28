import React, { useEffect, useState } from "react";

// import component
import Header from "./components/Header";
import Banner from "./components/Banner";
import MyInfoItem from "./components/MyInfoItem";
import TechStacks from "./components/TechStacks";
import ProjectList from "./components/ProjectList";
import BlogAndGitHub from "./components/BlogAndGitHub";
import BottomLayer from "./components/BottomLayer";
import FloatBtn from "./components/FloatBtn";

import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      // console.log("Scroll Position:", scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header scrollY={scrollY} />
      <Banner />
      <MyInfoItem />
      <TechStacks />
      <ProjectList />
      <BlogAndGitHub />
      <BottomLayer />
      {window.scrollY >= 96 ? <FloatBtn /> : <></>}
    </div>
  );
}

export default App;
