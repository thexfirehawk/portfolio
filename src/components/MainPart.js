import thisIsme from "../images/foto.png";
import "../styles/layout/Main.scss";

import Position from './Position'



const MainPart = () => {
 
  return (
    <main className="main">
      <div className="imgContainer">
        <img className="imgContainer__img" src={thisIsme} alt="this is me" />
        <article className="imgContainer__titles titles">
         <p>Hi! My name is Marta</p>
          <Position text={'Front-end developer'}/>

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
