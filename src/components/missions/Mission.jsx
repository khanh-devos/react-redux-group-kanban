import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './mission.css';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import SingleMission from './singleMission';

export default function Missions() {
  const missions = useSelector((state) => state.mission.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="mission-wrapper">
      <table className="mission-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((singleMission) => (
            <SingleMission
              key={singleMission.missionId}
              missionId={singleMission.missionId}
              missionName={singleMission.missionName}
              missionDescription={singleMission.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
