import React from 'react';
import PropsTypes from 'prop-types';
import defaultImg from '../Profile/default-img.jpg'
import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  // { isOnline ? 'online' : 'offline' }
 

  return (
    <li className={styles.item} >
      <span className={styles[isOnline]}></span>
      <img src={avatar} alt="" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  )


};

FriendListItem.defaultProps = {
  avatar: defaultImg
}

FriendListItem.propTypes = {
    avatar: PropsTypes.string,
    name: PropsTypes.string.isRequired,
    isOnline: PropsTypes.bool.isRequired,
}

export default FriendListItem;