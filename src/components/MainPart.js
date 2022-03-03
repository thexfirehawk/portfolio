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

      <div className="skills">
        <ul className="skills__list">
            <li className="skills__list--item">React</li>
            <li className="skills__list--item">JavaScript</li>
            <li className="skills__list--item">Node.js</li>
            <li className="skills__list--item">Git</li>
            <li className="skills__list--item">Express.js</li>
            <li className="skills__list--item">Template Engine .ejs</li>
            <li className="skills__list--item">HTML</li>
            <li className="skills__list--item">CSS</li>
            <li className="skills__list--item">Sass</li>
            <li className="skills__list--item">GitHub</li>
            <li className="skills__list--item">Slack</li>
            <li className="skills__list--item">SQL</li>
            <li className="skills__list--item">SQLite</li>
            <li className="skills__list--item">Heroku</li > 
            <li className="skills__list--item">Zeplin</li>
        </ul>
        </div>
    </main>
  );
};

export default MainPart;
