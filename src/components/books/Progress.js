import { CircularProgress } from '@material-ui/core';

import PropTypes from 'prop-types';

const Progress = ({ value }) => (
  <div>
    <CircularProgress variant="determinate" value={value} />
    <div>
      <span>{`${value}%`}</span>
      <span>Completed</span>
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
