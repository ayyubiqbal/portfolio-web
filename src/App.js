import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Portfolios from './pages/Portfolios';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import { useState } from 'react';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="App">
      <div className={`sidebar ${isNavOpen ? 'nav-toggle' : ''}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={toggleNav}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
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
