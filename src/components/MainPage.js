import React from 'react';
import Nav from './Nav';
import BookCard from './BookCard';
import Line from './Line';
import AddForm from './AddForm';
import store from '../redux/cofigureStore';

const { books } = store.getState();

const myBooksArr = books.map((book) => {
  const {
    id,
    categorie,
    title,
    author,
  } = book;
  return (
    <BookCard
      key={id}
      categorie={categorie}
      title={title}
      author={author}
    />
  );
});

const MainPage = () => (
  <div className="Panel-bg">
    <Nav />
    { myBooksArr }
    <Line />
    <AddForm />
  </div>
);

export default MainPage;
