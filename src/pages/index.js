import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import RedditIcon from "@material-ui/icons/Reddit";
import "../styles/global.css";
import logo from "../images/logo.svg";

const Title = ({ children }) => (
  <h1 className="text-black text-2xl p-5">{children}</h1>
);

const Text = ({ children, toggleText }) => (
  <p className="text-black text-sm p-7 " onClick={() => toggleText()}>
    {children}
  </p>
);
const Carousel = ({ children }) => <div>({children})</div>;

const IndexPage = () => {
  const [showText, setShowText] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showContacts, setShowContacts] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  const showAboutMeOnClick = () => {
    const timeInMiliseconds = showProjects ? 0 : 900;
    setShowProjects(true);
    setTimeout(() => {
      setShowAboutMe(true);
    }, timeInMiliseconds);
    // setShowAboutMe(!showAboutMe);
  };
  const showSkillsOnClick = () => {
    const timeInMiliseconds = showAboutMe ? 600 : 0;
    setShowAboutMe(false);
    setTimeout(() => {
      setShowProjects(false);
    }, timeInMiliseconds);
  };
  const showProjectsOnClick = () => {
    setShowAboutMe(false);
    setShowProjects(true);
  };

  const showContactsOnClick = () => {
    setShowContacts(!showContacts);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10 ">
        <nav
          className="flex text-white m-2 flex-col"
          style={{ maxWidth: "10rem" }}
        >
          <button className="nav-button" onClick={() => showAboutMeOnClick()}>
            About Me
          </button>
          <button className="nav-button" onClick={() => showSkillsOnClick()}>
            Skills
          </button>
          <button className="nav-button" onClick={() => showProjectsOnClick()}>
            Projects
          </button>
          <button className="nav-button" onClick={() => showContactsOnClick()}>
            Flip Menu
          </button>
        </nav>
      </header>
      <div className=" text-white mx-auto p-4 max-w-screen-md flex flex-col">
        <div className="scene">
          <div className={showContacts ? "menu is-flipped" : "menu"}>
            <div className="menu-card">
              <div className="menu-card-face menu-card-face-back">
                Backface-skills
              </div>
              <div className="menu-card-face menu-card-face-front">
                Front-skills
              </div>
            </div>
            <div
              className={
                showProjects
                  ? "menu-card is-right "
                  : "menu-card is-right is-flipped"
              }
            >
              <div className="menu-card-face menu-card-face-back">
                Backface-projects
              </div>
              <div className="menu-card-face menu-card-face-front">
                Front-projects
              </div>
            </div>
            <div
              className={
                showAboutMe
                  ? "menu-card is-left"
                  : "menu-card is-left is-flipped"
              }
            >
              <div className="menu-card-face menu-card-face-back">
                Backface-about
              </div>
              <div className="menu-card-face menu-card-face-front flex flex-col items-center justify-center">
                <div>
                  <img src={logo} alt="logo" className="logo" />
                </div>
                {/* <div className="flex justify-around m-10 ">
                  <a
                    href="https://www.linkedin.com/in/tjin-yip-au-yeung/"
                    target="_blank"
                  >
                    <LinkedInIcon className="link-icon" />
                  </a>
                  <a href="https://github.com/ele1992" target="_blank">
                    <GitHubIcon className="link-icon" />
                  </a>
                  <a href="https://old.reddit.com" target="_blank">
                    <RedditIcon className="link-icon" />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexPage;
