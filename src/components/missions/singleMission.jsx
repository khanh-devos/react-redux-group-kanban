import { PropTypes } from 'prop-types';

export default function SingleMission({ missionId, missionName, missionDescription }) {
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
        <button type="button">
          Join Mesion
        </button>
      </td>
    </tr>
  );
}

SingleMission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
};
