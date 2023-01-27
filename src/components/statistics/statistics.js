import PropTypes from "prop-types";
import StatList from "./statList/statList";
import css from './statistics.module.css';

export default function Statistics({ titel, stats }) {
  return (
    <>
      {titel && <h2 className={css.title}>{titel}</h2>}
      <StatList stats={stats} />
    </>
  );
}

Statistics.propTypes = {
  titel: PropTypes.string,
  stats: PropTypes.array.isRequired,   //?????
};
