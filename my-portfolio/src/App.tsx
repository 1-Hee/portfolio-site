// import react
import { useEffect } from "react";
// import redux and reducers
import { useAppSelector, useAppDispatch } from "./redux/hooks";
import { setCurScroll } from "./redux/headerPosition";

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
  const dispatch = useAppDispatch();
  const curScroll = useAppSelector((state) => state.headerPosition.curScroll);

  useEffect(() => {
    const handleScroll = () => {
      dispatch(setCurScroll(window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header scrollY={curScroll} />
      <Banner />
      <MyInfoItem />
      <TechStacks />
      <ProjectList />
      <BlogAndGitHub />
      <BottomLayer />
      {window.scrollY >= 60 ? <FloatBtn /> : <></>}
    </div>
  );
}

export default App;
