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
  friends: PropTypes.arrayOf().isRequired
}

export default FriendList;
