
import Profile from './components/Profile/Profile';
import user from './data/user.json';



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
      </div>
   );
};

export default App;


