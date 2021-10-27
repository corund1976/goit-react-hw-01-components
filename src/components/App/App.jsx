import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

import './App.css';

function App() {
  return (
    <>
      <Profile
        user={user} />
      <Statistics
        title="Upload stats"
        stats={statisticalData} />
      {/* <Statistics
        stats={statisticalData}/> */}
      <FriendList
        friends={friends} />
      <TransactionHistory
        items={transactions} />
    </>
  )
}

export default App;