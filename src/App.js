import Profile from './components/Profile/Profile';
import user from './data/user.json';
import Statistics from 'components/Statistics/Statistics';
import data from './data/data.json';

const { username, tag, location, avatar, stats } = user;
const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingTop: '30px',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};

export default App;
