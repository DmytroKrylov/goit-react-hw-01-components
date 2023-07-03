import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'Online' : 'Ofline';

  return (
    <li className="item">
      <span className={statusClass}>{statusClass}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

export default FriendListItem;
