import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolios from './pages/Portfolios';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolios" component={Portfolios} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
