import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    
    return (
        
        <ul className="friend-list">
            {friends.map((friend) => (
               
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    key={friend.id}
                />
            ))
                
            }
        </ul>
    )
};

export default FriendList;