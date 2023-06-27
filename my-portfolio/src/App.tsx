import React from "react";

// import component
import Header from "./components/Header";
import Banner from "./components/Banner";
import MyInfoItem from "./components/MyInfoItem";
import TechStacks from "./components/TechStacks";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MyInfoItem />
      <TechStacks />
    </div>
  );
}

export default App;
