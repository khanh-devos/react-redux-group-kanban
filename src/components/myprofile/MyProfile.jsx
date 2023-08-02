import { useSelector } from 'react-redux';
import ProfileItem from './ProfileItem';
import './profile.css';

export default function MyProfile() {
  const { rockets } = useSelector((store) => store.rocket);
  const { missions } = useSelector((store) => store.mission);

  return (
    <div className="my-profile">
      <div className="profile-mission">
        <h3 className="my-profile-booked-h3">
          My Missions
        </h3>
        <ul className="profile-ul">
          {
          missions.filter((item) => item.reserved)
            .map(({ missionId, missionName }) => <ProfileItem key={missionId} name={missionName} />)
          }
        </ul>
      </div>
      <div className="profile-rocket">
        <h3 className="my-profile-booked-h3">
          My Rockets
        </h3>
        <ul className="profile-ul">
          {
          rockets.filter((item) => item.reserved)
            .map(({ id, name }) => <ProfileItem key={id} name={name} />)
          }
        </ul>
      </div>
    </div>
  );
}
