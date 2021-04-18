import React from 'react';
import PropsTypes from 'prop-types';
import defaultImg from '../Profile/default-img.jpg'

const FriendListItem = ({avatar,name,isOnline}) => {
    

    return (
     <li className="item" >
            <span className="status">{ isOnline}</span>
            <img  src={avatar} alt="" width="48" className="avatar"/>
            <p className="name">{name}</p>
   </li>
)


}

FriendListItem.defaultProps = {
  avatar: defaultImg
}

FriendListItem.propTypes = {
    avatar: PropsTypes.string,
    name: PropsTypes.string.isRequired,
    isOnline: PropsTypes.bool.isRequired,
}

export default FriendListItem;