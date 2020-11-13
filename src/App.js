import './App.css';
import Header from './Components/Header'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="parent">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/blogs">
              <Blogs />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
