import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeAgain = (e) => setAuthor(e.target.value);

  const submitBookToStore = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };

    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <article>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input
          value={title}
          placeholder="Book title"
          required
          onChange={handleChange}
        />
        <input
          value={author}
          placeholder="Book author"
          required
          onChange={handleChangeAgain}
        />

        <select placeholder="Categorie">
          <option value="">Categorie</option>
          <option>Metaphysics</option>
          <option>Autobiography</option>
          <option>Children Books</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </article>
  );
};

export default AddBook;
