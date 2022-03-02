import thisIsme from "../images/foto.png";
import css from "../images/css.png";
import git from "../images/git.png";
import gulp from "../images/gulp.png";
import html from "../images/html.png";
import node from "../images/nodejs.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
import js from "../images/js.png";
import npm from "../images/npm.png";
import "../styles/layout/Main.scss";

const MainPart = () => {
  return (
    <main className="main">
      <div className="imgContainer">
        <img className="imgContainer__img" src={thisIsme} alt="this is me" />
        <article className="imgContainer__titles titles">
          <p>Hi, my name is Marta!</p>
          <p>Front-end developer</p>

          <div className="div_download container-button__item">
            <a
              className="link_download"
              href="https://api-resume-marta.herokuapp.com/cv"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </article>
      </div>

      <div className="downpart">
        <div className="techStack">
          <ul className="techStack__list">
            <li className="techStack__list--item">
              <img src={js} alt="Javascript"></img>
            </li>
            <li className="techStack__list--item">
              <img src={react} alt="React"></img>
            </li>
            <li className="techStack__list--item">
              <img src={git} alt="Git"></img>
            </li>
            <li className="techStack__list--item">
              <img src={gulp} alt="Gulp"></img>
            </li>
            <li className="techStack__list--item">
              <img src={sass} alt="Sass"></img>
            </li>
            <li className="techStack__list--item">
              <img src={html} alt="Html"></img>
            </li>
            <li className="techStack__list--item">
              <img src={css} alt="Css"></img>
            </li>
            <li className="techStack__list--item">
              <img src={node} alt="Node"></img>
            </li>
            <li className="techStack__list--item">
              <img src={npm} alt="npm"></img>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default MainPart;
