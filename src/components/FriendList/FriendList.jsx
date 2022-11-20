import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import defaultImage from './../../Image.png';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friend_list}>
       {friends.map(({id, isOnline, avatar = defaultImage, name }) =>(
        <li className={css.item}  key={id}>
        <span className={isOnline ? css.status__true : css.status__false}></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
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

