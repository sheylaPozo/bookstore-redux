import PropTypes from 'prop-types';
import BookActions from './BookActions';
import BookDetails from './BookDetails';
import BookStats from './BookStats';
import Progress from './Progress';
import './Book.css';

const Book = ({
  id, category, title, author, progress, currentChapter,
}) => (
  <div className="book-container">
    <div>
      <BookDetails category={category} title={title} author={author} />
      <BookActions id={id} />
    </div>
    <div className="stats">
      <Progress value={progress} />
      <BookStats currentChapter={currentChapter} />
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  progress: PropTypes.number,
  currentChapter: PropTypes.string,
};

Book.defaultProps = {
  id: '',
  category: '',
  author: '',
  progress: 0,
  currentChapter: '',
};

export default Book;
