import React from 'react';

import Profile from './componets/Profile/Profile';
import FriendList from './componets/FriendLIst/FriendList';
import TransactionHistory from './componets/TransactionHistory/TransactionHistory';

import userData from './userData.json';
import friendList from './friendList.json'; 
import transactions from './transactions.json'
function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friendList={friendList} /> 
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;