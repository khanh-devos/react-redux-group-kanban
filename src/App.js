import './App.css';
import {
  BrowserRouter, Route, NavLink, Routes,
} from 'react-router-dom';
import Missions from './components/missions/Mission';
import Rockets from './components/rockets/Rocket';

function App() {
  const colorActiveRoute = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' });

  return (
    <div className="App">
      <BrowserRouter>
        <NavLink style={colorActiveRoute} to="/">Rockets</NavLink>
        <NavLink style={colorActiveRoute} to="/mission">Missions</NavLink>

        <Routes>
          <Route path="/" Component={Rockets} />
          <Route path="/mission" Component={Missions} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
