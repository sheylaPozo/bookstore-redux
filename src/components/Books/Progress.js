import { CircularProgress } from '@material-ui/core';
import './Progress.css';

import PropTypes from 'prop-types';

const Progress = ({ value }) => (
  <div className="progress d-flex flex-basis">
    <CircularProgress variant="determinate" size="4.2rem" thickness="2.5" value={value} />
    <div>
      <span className="percentage">{`${value}%`}</span>
      <span className="completed">Completed</span>
    </div>
  </div>
);

Progress.propTypes = {
  value: PropTypes.number,
};

Progress.defaultProps = {
  value: 0,
};

export default Progress;
