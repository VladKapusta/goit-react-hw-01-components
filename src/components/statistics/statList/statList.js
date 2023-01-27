import PropTypes from "prop-types";
import css from "./statList.module.css"

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function StatList({ stats }) {
  return (
    <ul className={css.statList}>
      {stats.map((el) => (
        <li className={css.item} key={el.id} style={{backgroundColor: `${getRandomHexColor()}`}}>
          <span className={css.label}>{el.label}</span>
          <span className={css.percentage}>{el.percentage} %</span>
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
