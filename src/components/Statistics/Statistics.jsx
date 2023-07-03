import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from '../../index';

const Statistics = ({ title, stats }) => {
  return (
    <section
      className={css.section_statistics}
      style={{
        background: `radial-gradient(
    183.6% 183.01% at 59.76% -23.42%,
    ${getRandomColor()} 18.03%,
    #fff 100%
  )`,
      }}
    >
      {title && <h2 className={css.title}>{title}</h2>}
      {/* <h2 className="title">{title}</h2> */}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={css.stat_item}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
