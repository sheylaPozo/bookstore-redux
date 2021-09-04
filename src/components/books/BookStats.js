import PropTypes from 'prop-types';
import Button from './Button';

const BookStats = ({ currentChapter }) => (
  <div>
    <h5>CURRENT CHAPTER</h5>
    <h6>{currentChapter}</h6>
    <Button name="UPDATE PROGRESS" />
  </div>
);

BookStats.propTypes = {
  currentChapter: PropTypes.string,
};

BookStats.defaultProps = {
  currentChapter: '',
};

export default BookStats;
