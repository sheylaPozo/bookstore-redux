import React from 'react';
import {useDispatch} from 'react-redux';
import { removeBook } from "../../redux/books/books";
import PropTypes from 'prop-types';

const BookActions = (props) => {
  const dispatch = useDispatch();
  const { bookid } = props;

  const removeBookFromStore = () => {
    dispatch(removeBook(bookid));
  };

  return (
    <div>
      <button type="button">Comments</button>
      <button type="button" onClick={removeBookFromStore}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

BookActions.defaultProps = {
  bookid: '',
};

BookActions.propTypes = {
  bookid: PropTypes.string,
};

export default BookActions;
