import PropTypes from "prop-types";
import css from "./profile.module.css";

export default function Profile({ imageUrl, name, tag, location, stats }) {
  const arrStats = Object.entries(stats)
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={imageUrl} alt="User avatar" width="120" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
      {arrStats.map(el => (
        <li key={el[1]}>
          <span>{el[0]}</span>
          <span>{el[1]}</span>
        </li>
      ))}
      </ul>
    </div>
  );
}
Profile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
