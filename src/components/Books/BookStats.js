import PropTypes from 'prop-types';
import Button from './Button';
import './BookStats.css';

const BookStats = ({ currentChapter }) => (
  <div className="book-stats d-flex">
    <h5 className="current-chapter">CURRENT CHAPTER</h5>
    <h6 className="current-lesson">{currentChapter}</h6>
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
