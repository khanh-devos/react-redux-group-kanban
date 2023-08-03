import './App.css';
import './components/missions/mission.css';
import './components/rockets/rocket.css';
import {
  BrowserRouter, Route, NavLink, Routes, redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Missions from './components/missions/Mission';
import Rockets from './components/rockets/Rocket';
import Logo from './planet.png';
import { fetchGetRockets } from './redux/rocketSlice/rocketSlice';
import MyProfile from './components/myprofile/MyProfile';
import { fetchMissions } from './redux/missions/missionsSlice';

const APP_NAME = 'react-redux-group-kanban';

function App() {
  const { isLoading } = useSelector((store) => store.rocket);
  const colorActiveRoute = ({ isActive }) => (isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetRockets());
    dispatch(fetchMissions());
  }, [dispatch]);

  if (isLoading) return (<div className="isLoading">Loading ...</div>);

  return (
    <div className="App">

      <BrowserRouter>
        <header className="header">
          <div className="logo-container">
            <NavLink style={colorActiveRoute} to="/react-redux-group-kanban">
              <img className="logo-img" src={Logo} alt="space logo" />
            </NavLink>
            <h1>Space Travelers &#39; Hub</h1>
          </div>

          <div>
            <NavLink style={colorActiveRoute} to="/react-redux-group-kanban">Rockets</NavLink>
            <NavLink style={colorActiveRoute} to="/react-redux-group-kanban/mission">Missions</NavLink>
            <NavLink style={colorActiveRoute} to="/react-redux-group-kanban/myprofile">My Profile</NavLink>

          </div>
        </header>

        <Routes>
          <Route path="/react-redux-group-kanban" element={<Rockets />} />
          <Route path="/react-redux-group-kanban/mission" element={<Missions />} />
          <Route path="/react-redux-group-kanban/myprofile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
