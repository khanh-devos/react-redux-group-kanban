import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleJoinMission } from '../../redux/missions/missionsSlice';

export default function SingleMission({
  missionId, missionName, missionDescription, missionReserved,
}) {
  const dispatch = useDispatch();
  const handleJoinMission = (e) => {
    const missionId = e.target.id;
    dispatch(toggleJoinMission(missionId));
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
        { missionReserved && (
          <button
            type="button"
            className="mission-active-button"
          >
            Active Member
          </button>
        )}
        { !missionReserved && (
          <button
            type="button"
            className="mission-inactive-button"
          >
            NOT A MEMBER
          </button>
        )}
      </td>
      <td>
        { missionReserved && (
          <button
            id={missionId}
            type="button"
            onClick={handleJoinMission}
            className="leave-mission-button"
          >
            Leave Mission
          </button>
        )}
        { !missionReserved && (
          <button
            id={missionId}
            type="button"
            title="test-mission-btn"
            onClick={handleJoinMission}
            className="join-mission-button"
          >
            Join Mission
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
