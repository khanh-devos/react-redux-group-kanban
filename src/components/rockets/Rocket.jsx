import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';

export default function Rockets() {
  const { rockets } = useSelector((store) => store.rocket);

  return (
    <div className="rocket">
      <ul className="rocket-ul">

        {
    rockets.map(({
      id, name, flickrImages, description, reserved = false,
    }) => (
      <RocketItem
        key={id}
        id={id}
        image={flickrImages[0]}
        name={name}
        description={description}
        reserved={reserved}

      />
    ))
  }

      </ul>

    </div>
  );
}
