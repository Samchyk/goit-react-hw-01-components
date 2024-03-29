import s from './App.module.css';
import Profile from '../Profile/Profile';
import user from 'data/user.json';
import Statistics from '../Statistics/Statistics';
import data from 'data/data.json';
import FriendList from '../FriendList/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

const { username, tag, location, avatar, stats } = user;
const App = () => {
  return (
    <div className={s.countainer}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
