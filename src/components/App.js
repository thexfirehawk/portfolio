import "../styles/Index.scss";
import Header from "./Header";
import MainPart from "./MainPart";
import { Route, Switch } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPart />
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
        <Contact />
      </Switch>
    </div>
  );
}

export default App;

