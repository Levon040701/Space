import ReactDOM from 'react-dom/client';
import './index.css';
import './Header/headerStyle.css'
import './Info/infoStyle.css'
import './Menu/menuStyle.css'
import './Slider/sliderStyle.css'

import Header from './Header/Header';
import Slider from './Slider/Slider';
import Menu from './Menu/Menu';
import Info from './Info/Info';

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Slider></Slider>
      <Menu></Menu>
      <Info></Info>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);

