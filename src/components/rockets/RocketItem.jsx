import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReserve } from '../../redux/rocketSlice/rocketSlice';

export default function RocketItem({
  image, name, description, reserved, id,
}) {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(toggleReserve(id));
  };

  return (
    <li className="rocket-li">
      <img src={image} className="rocket-li-imgs" alt="rocket" />
      <div className="rocket-li-name-desc">
        <h3 className="rocket-li-h3">{name}</h3>
        <p>
          {reserved && <b className="rocket-li-reserved-tag">reserved</b>}
          {description}
        </p>
        <button
          type="button"
          title="testClick"
          className={!reserved ? 'rocket-btn-type1' : 'rocket-btn-type2'}
          onClick={handleClick}
        >
          {!reserved ? 'Reserve Rocket' : 'Cancel Revervation' }
        </button>
      </div>
    </li>
  );
}

RocketItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
