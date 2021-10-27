import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem'

function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      <FriendListItem
        friends={friends}
      />
    </ul>);
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape ({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default FriendList;