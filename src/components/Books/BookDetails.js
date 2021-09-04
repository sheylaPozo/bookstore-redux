import PropTypes from 'prop-types';
import './BookDetails.css';

const BookDetails = ({ category, title, author }) => (
  <div className="details">
    <span className="category">{category}</span>
    <h2 className="title">{title}</h2>
    <span className="author">{author}</span>
  </div>
);

BookDetails.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

BookDetails.defaultProps = {
  category: '',
  title: '',
  author: '',
};

export default BookDetails;
