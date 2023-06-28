import { useEffect, useRef } from "react";

//import redux
import { useAppDispatch } from "../redux/hooks";
import { setGitBlog } from "../redux/headerPosition";

// import image
import gitHubIcon from "../assets/skill-icons/github-icons.png";
import blogIcon from "../assets/skill-icons/velog-icon.png";

import "../styles/css/BlogAndGitHub.css";

// temp
const githubURL = "https://github.com/1-hee";
const blogURL = "https://velog.io/@1-hee";

const moveToLink = (link: string) => {
  window.location.href = link;
};

const BlogAndGitHub = () => {
  const gitBlogRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (gitBlogRef.current) {
      dispatch(setGitBlog(gitBlogRef.current.offsetTop));
    }
  }, [gitBlogRef]);

  return (
    <div className="blog-github-item" ref={gitBlogRef}>
      <p className="blog-github-title">BLOG & GITHUB</p>
      <div className="blog-github-items">
        <div
          className="github-item"
          onClick={(e) => {
            moveToLink(githubURL);
          }}
        >
          <img style={{ content: `url(${gitHubIcon})` }} alt="github" />
          <a className="url" href={githubURL}>
            {githubURL}
          </a>
        </div>
        <div
          className="blog-item"
          onClick={(e) => {
            moveToLink(blogURL);
          }}
        >
          <img style={{ content: `url(${blogIcon})` }} alt="blog" />
          <a className="url" href={blogURL}>
            {blogURL}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogAndGitHub;
