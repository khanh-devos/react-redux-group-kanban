import { PropTypes } from 'prop-types';

export default function ProfileItem({ name }) {
  return (<li className="reserved-rockets">{name}</li>);
}

ProfileItem.propTypes = {
  name: PropTypes.string.isRequired,
};
