import s from './FriendList.module.css';
import FriendItem from './FriendItem';
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ order, name, avatar, isOnline }) => (
        <FriendItem
          key={order}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.number.isRequired,
};
