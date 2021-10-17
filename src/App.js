// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.less';
import { ParallaxProvider } from 'react-scroll-parallax';


import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
    </div>
  );
}

export default App;
