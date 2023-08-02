import './App.css';
import './components/missions/mission.css';
import './components/rockets/rocket.css';
import {
  BrowserRouter, Route, NavLink, Routes,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Missions from './components/missions/Mission';
import Rockets from './components/rockets/Rocket';
import Logo from './planet.png';
import MyProfile from './components/MyProfile';
import { fetchGetRockets } from './redux/rocketSlice/rocketSlice';

function App() {
  const { isLoading } = useSelector((store) => store.rocket);
  const colorActiveRoute = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetRockets());
  }, [dispatch]);

  if (isLoading) return (<div className="isLoading">Loading ...</div>);

  return (
    <div className="App">

      <BrowserRouter>
        <header className="header">
          <div className="logo-container">
            <img className="logo-img" src={Logo} alt="space logo" />
            <h1>Space Travelers &#39; Hub</h1>
          </div>

          <div>
            <NavLink style={colorActiveRoute} to="/">Rockets</NavLink>
            <NavLink style={colorActiveRoute} to="/mission">Missions</NavLink>
            <NavLink style={colorActiveRoute} to="/myprofile">My Profile</NavLink>

          </div>
        </header>

        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/mission" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
