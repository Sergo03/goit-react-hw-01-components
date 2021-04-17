import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';
import FriendsList from './components/FriendList/FriendList';
import friends from './friends.json'

const App = () => {
   
    return (
       <div>
        <Profile
            name={user.name}
            tag = { user.tag }
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendsList friends={friends}  />
       </div>
    )
};

export default App;