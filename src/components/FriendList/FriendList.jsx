import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <section className={css.section_friends}>
      <ul className={css.friend_list}>
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

export default FriendList;
