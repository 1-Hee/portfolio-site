import React from "react";

// import component
import Header from "./components/Header";
import Banner from "./components/Banner";
import MyInfoItem from "./components/MyInfoItem";
import TechStacks from "./components/TechStacks";
import ProjectList from "./components/ProjectList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MyInfoItem />
      <TechStacks />
      <ProjectList />
    </div>
  );
}

export default App;
