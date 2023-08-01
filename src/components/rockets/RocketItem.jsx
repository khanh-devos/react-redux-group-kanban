import { PropTypes } from 'prop-types';
import { useState } from 'react';

export default function RocketItem({ image, name, description }) {
  const [btn, setBtn] = useState(true);
  const handleClick = (event) => {
    event.preventDefault();
    setBtn((btn) => !btn);
  };

  return (
    <li className="rocket-li">
      <img src={image} className="rocket-li-imgs" alt="rocket" />
      <div className="rocket-li-name-desc">
        <h3 className="rocket-li-h3">{name}</h3>
        <p>{description}</p>
        <button
          type="button"
          className={btn ? 'rocket-btn-type1' : 'rocket-btn-type2'}
          onClick={handleClick}
        >
          {btn ? 'Reserve Rocket' : 'Cancel Revervation' }
        </button>
      </div>
    </li>
  );
}

RocketItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
