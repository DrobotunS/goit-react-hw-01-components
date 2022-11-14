import PropTypes from 'prop-types';
const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
  <h2 className="title">{title}</h2>
  <ul className="stat-list">
  {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage} %</span>
            </li>
          );
        })}
  </ul>
</section>
    )
}

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
