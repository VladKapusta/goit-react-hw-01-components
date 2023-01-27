import PropTypes from "prop-types";
import css from "./cardFriend.module.css";
export default function CardFriend({ isOnline, avatar, name }) {
  return (
    <>
      <span className={isOnline ? `${css.online}` : `${css.ofline}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

CardFriend.propsType = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
