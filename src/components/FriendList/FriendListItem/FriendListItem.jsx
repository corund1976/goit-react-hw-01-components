import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ friends }) {
  return (friends.map(friend => {
    return (
      <li key={friend.id} className={s.item}>
        <span className={s.status} style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}></span>
        <img className={s.avatar} src={friend.avatar} alt="" width="48" />
        <p className={s.name}>{friend.name}</p>
      </li>
    );
  })
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  )
};

export default FriendListItem;
