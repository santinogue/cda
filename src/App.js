// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.less';
import { ParallaxProvider } from 'react-scroll-parallax';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Home from './pages/Home';
import About from './pages/About';
import Directiva from './pages/Directiva';
import Penca from './pages/Penca';
import Socios from 'pages/Socios';

const App = () => {
  return (
    <Router>
      <div className="App">
        <ParallaxProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/club">
              <About />
            </Route>
            <Route path="/directiva">
              <Directiva />
            </Route>
            <Route path="/socios">
              <Socios />
            </Route>
          </Switch>
        </ParallaxProvider>
      </div>
    </Router>
  );
}

export default App;
