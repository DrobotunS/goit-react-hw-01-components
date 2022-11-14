import PropTypes from 'prop-types';
import defaultImage from './../../Image.png';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
       {friends.map(({id, isOnline, avatar = defaultImage, name }) =>(
        <li className="item"  key={id}>
        <span className="status">{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
        </li>
       ))}     

</ul>
    )
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        isOnline: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    )
  };

export default FriendList;

