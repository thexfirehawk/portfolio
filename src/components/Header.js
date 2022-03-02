import "../styles/layout/Header.scss";
import { Link, Route } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navHeader">
        <ul className="navHeader__ul">
          <Route>
            <Link to="/" className="navHeader__ul--item">
              Home
            </Link>

            <Link to="/AboutmE" className="navHeader__ul--item">
              About me
            </Link>

            <Link to="/Contact" className="navHeader__ul--item">
              Contact
            </Link>
          </Route>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
