import React from 'react';
import PropTypes from 'prop-types';
import BookActions from './BookAction';

const BookInfo = (props) => {
  const {
    bookid,
    categorie,
    title,
    author,
  } = props;

  return (
    <div>
      <span>{categorie}</span>
      <span>{title}</span>
      <span>{author}</span>
      <BookActions bookid={bookid} />
    </div>
  );
};

BookInfo.defaultProps = {
  bookid: '',
  categorie: '',
  title: '',
  author: '',
};

BookInfo.propTypes = {
  bookid: PropTypes.string,
  categorie: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookInfo;
