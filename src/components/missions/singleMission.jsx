import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

export default function SingleMission({
  missionId, missionName, missionDescription, missionReserved,
}) {
  const dispatch = useDispatch();
  const handleJoinMission = (e) => {
    const missionId = e.target.id;
    dispatch(joinMission(missionId));
  };
  const handleLeaveMission = (e) => {
    const missionId = e.target.id;
    dispatch(leaveMission(missionId));
  };
  return (
    <tr>
      <td>
        {missionName}
      </td>
      <td>
        {missionDescription}
      </td>
      <td>
        <button type="button">
          Not a Member
        </button>
      </td>
      <td>
        { missionReserved && (
          <button
            id={missionId}
            type="button"
            onClick={handleLeaveMission}
            className="leave-mission-button"
          >
            Leave Mission
            {missionReserved}
          </button>
        )}
        { !missionReserved && (
          <button
            id={missionId}
            type="button"
            onClick={handleJoinMission}
            className="join-mission-button"
          >
            Join Mission
            {missionReserved}
          </button>
        )}
      </td>
    </tr>
  );
}

SingleMission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
  missionReserved: PropTypes.bool.isRequired,
};
