import './App.css';
import './components/missions/mission.css';
import './components/rockets/rocket.css';
import {
  BrowserRouter, Route, NavLink, Routes,
} from 'react-router-dom';
import Missions from './components/missions/Mission';
import Rockets from './components/rockets/Rocket';
import Logo from './planet.png';

function App() {
  const colorActiveRoute = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' });

  return (
    <div className="App">

      <BrowserRouter>
        <header className="header">
          <div className="logo-container">
            <img className="logo-img" src={Logo} alt="space logo" />
            <h1>Space Travelers &#39; Hub</h1>
          </div>

          <navigator>
            <NavLink style={colorActiveRoute} to="/">Rockets</NavLink>
            <NavLink style={colorActiveRoute} to="/mission">Missions</NavLink>
          </navigator>
        </header>

        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/mission" element={<Missions />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
