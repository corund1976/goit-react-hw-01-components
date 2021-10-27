import s from "./Statistics.module.css";
import PropTypes from 'prop-types';
import { getRandomRgbColor } from "../../utils/GetRandomColor";

function Statistics({ title, stats }) {
  const statisticsItem = stats.map(item => {
    return (
      <li className={s.item} key={item.id} style={{backgroundColor: getRandomRgbColor()}}>
        <span className={s.label}>{item.label}</span>
        <span className={s.percentage}>{item.percentage}</span>
      </li>);
  });
    
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>
        {statisticsItem}
      </ul>
    </section>);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    }).isRequired
  )
}

export default Statistics;