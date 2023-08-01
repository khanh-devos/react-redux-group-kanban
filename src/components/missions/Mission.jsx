import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './mission.css';
import { fetchMissions } from '../../redux/missions/missionsSlice';

export default function Missions() {
  // const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      Mission:
    </div>
  );
}
