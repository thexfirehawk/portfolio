import "../styles/layout/AboutMe.scss";

const AboutMe = () => {
  return (
    <div>
      <div className="getToKnow">
        <h1 className="getToKnow__title">Get to know more about me...</h1>
        <article className="getToKnow__article">
          <p className="getToKnow__p">
            After finishing my studies I decided to go to the UK to improve my
            English while working as a nanny. When I became confident with the
            language I decided to go into the tourism industry.
            <br></br>
             I used the pandemic situation as a challenge to reinvent myself into the
            technology world. I have learned and developed the necessary
            knowledge to work as a programmer after an intensive boot camp.<br>
            </br> 
            My next goal is to be able to demonstrate my learned skills, improve my
            knowledge and have the opportunity to learn different technologies
            in an exciting and challenging job.
          </p>
        </article>
      </div>
      <h2 className="title">Marta's Journey</h2>

      <div className="timeline">
        <div className="entry">
          <div className="title">
            <h3>2022 November - Present</h3>
            <p>Adalab Digital</p>
          </div>
          <div className="body">
            <h4 className="timeline__titles">Web development</h4>
            <p className="timeline__titles--descr">Bootcamp | Remote</p>
            <ul>
              <li>Layout : HTML5, CSS3, Flexbox, CSS Grid, SASS</li>
              <li>JavaScript (ES6) and third party web services (APIs)</li>
              <li>Version Control with Git</li>
              <li>Creation of simple SPAs with React</li>
              <li>Node JS : use, debugging and file system access</li>
              <li>
                Express: static servers, APIs, middleware,, template engines
              </li>
              <li>SQL : (SQLite) creation and management of table databases</li>
              <li>
                Slack, GitHub, VSCode, Gulp, Heroku, Terminal, Linter, Zeplín
              </li>
              <li>
                Experience in planning and executing projects under the Scrum
                framework and Agile philosophy
              </li>
            </ul>
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <h3>2019 September - 2022 January</h3>
            <p>Eurowelcome</p>
          </div>
          <div className="body">
            <h4 className="timeline__titles">
              Operations and Reservations Executive
            </h4>
            <p className="timeline__titles--descr">
              Tour Operator | London, UK
            </p>
            <ul>
              <li>Coordinate and work with the different departments.</li>
              <li>
                Ensure efficient resolution of all guest inquiries for the
                different services and operations.
              </li>
              <li>Resolution of problems that may occur during the trip.</li>
              <li>Manage claims and the company's emergency phone number.</li>
              <li>
                Analyze all guest requirements, recommend suitable options for
                all customers and assist to confirm all reservations.
              </li>
              <li>Tour operator management system (TourPlan)</li>
            </ul>
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <h3>20016 February - 2016 July</h3>
            <p>Exe Hotel</p>
          </div>
          <div className="body">
            <h4 className="timeline__titles">Receptionist</h4>
            <p className="timeline__titles--descr">Exe Hotel | Cuenca, Spain</p>
            <ul>
              <li>Charge of customer support</li>
              <li>Managing all bookings</li>
              <li>Hotel management system (Tesipro)</li>
            </ul>
          </div>
        </div>
        <div className="entry">
          <div className="title">
            <h3>2014 September - 2016 June</h3>
            <p>Tourism Higher Education</p>
          </div>
          <div className="body">
            <h4 className="timeline__titles">
              Higher Education of Tourism Management
            </h4>
            <p className="timeline__titles--descr">
              IES San José | Cuenca, Spain
            </p>
            <ul>
              <li>Protocol and Public Relations</li>
              <li>Tourist Marketing</li>
              <li>Events Comercialisation</li>
              <li>Tourist Accommodation Management</li>
              <li>Reception and Reservations</li>
              <li>Human Resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
