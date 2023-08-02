import { useSelector } from 'react-redux';
import ProfileItem from './ProfileItem';

export default function MyProfile() {
  const { rockets } = useSelector((store) => store.rocket);

  if (rockets.filter((item) => item.reserved).length === 0) {
    return (
      <ul className="rocket-profile-ul">You might not book any rocket yet!</ul>
    );
  }

  return (
    <div className="my-profile">
      <h3 className="my-profile-booked-h3">ROCKETS SUCCESSFULLY BOOKED:</h3>
      <ul className="rocket-profile-ul">
        {
      rockets.filter((item) => item.reserved)
        .map(({ id, name }) => <ProfileItem key={id} name={name} />)
    }
      </ul>
    </div>
  );
}
