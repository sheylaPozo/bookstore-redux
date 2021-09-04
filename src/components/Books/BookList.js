import PropTypes from 'prop-types';
import Book from './Book';
import './BookList.css';

const BookList = ({ books }) => (
  <ul className="books">
    {books.map((book) => {
      const {
        id, category, title, author, progress, currentChapter,
      } = book;
      return (
        <li key={book.id} className="book d-flex">
          <Book
            id={id}
            category={category}
            title={title}
            author={author}
            progress={progress}
            currentChapter={currentChapter}
          />
        </li>
      );
    })}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(Book),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
