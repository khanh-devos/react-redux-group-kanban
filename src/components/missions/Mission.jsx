import { useSelector } from 'react-redux';
import './mission.css';
import SingleMission from './SingleMission';

export default function Missions() {
  const missions = useSelector((state) => state.mission.missions);

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
              missionReserved={singleMission.reserved || false}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
