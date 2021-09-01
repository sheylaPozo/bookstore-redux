import React from 'react';
import PropTypes from 'prop-types';
import BookActions from './BookActions';

const BookInfo = (props) => {
  const { categorie, title, author } = props;
  return (
    <div>
      <span>{categorie}</span>
      <span>{title}</span>
      <span>{author}</span>
      <BookActions />
    </div>
  );
};

BookInfo.defaultProps = {
  categorie: '',
  title: '',
  author: '',
};

BookInfo.propTypes = {
  categorie: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
};

export default BookInfo;
