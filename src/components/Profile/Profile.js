import React from 'react';
import defaultImg from './default-img.jpg'
import PropsTypes from 'prop-types';
import styles from './Profile.module.css'

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
          width='100'
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.list}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
};

Profile.defaultProps = {
  avatar: defaultImg
}
Profile.propTypes = {
  avatar:PropsTypes.string,
  name: PropsTypes.string.isRequired,
  tag: PropsTypes.string.isRequired,
  location: PropsTypes.string.isRequired,
  stats:PropsTypes.object.isRequired
}

export default Profile;