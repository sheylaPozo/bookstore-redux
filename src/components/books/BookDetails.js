import PropTypes from 'prop-types';
import './BookDetails.css';

const BookDetails = ({ category, title, author }) => (
  <div className="details">
    <span>{category}</span>
    <h2>{title}</h2>
    <span>{author}</span>
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
