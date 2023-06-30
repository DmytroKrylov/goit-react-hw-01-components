import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <section className={css.section_profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.stats_item}>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
