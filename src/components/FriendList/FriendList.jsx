import PropTypes from 'prop-types';

const FriendList = props => {
  const { friends } = props;
  return (
    <section className="friends">
      <ul className="friend-list">
        {friends.map(({ avatar, name, id, isOnline }) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            key={id}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </section>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'status online' : 'status offline';

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

export default FriendList;
