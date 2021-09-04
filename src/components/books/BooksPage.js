import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NewBook from './NewBook';
import BookList from './BookList';
import './BooksPage.css';
import { getBooks } from '../../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="book-page">
      <BookList books={books} />
      <NewBook />
    </div>
  );
};

export default BooksPage;
