import { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { createBook } from '../../redux/books/books';
import Button from './Button';
import './NewBook.css';

const categories = ['Choose a Category', 'Action', 'Biography', 'Children Books', 'Action and Adventure', 'Adventure', 'Classics', 'Drama', 'Mystery', 'Historical Fiction', 'Detective and Mystery', 'Fiction', 'Romance', 'Poetry', 'Short Stories', 'True Crime', 'Suspense', 'Comedy', 'Economy', 'Marketing', 'Finances', 'Accounting', 'Novel', 'Horror', 'Science', 'Self Help', 'Psychology', 'Metaphysics', 'Fantasy', 'Autobiography', 'Science Fiction', 'Fitness', 'Comic Book or Graphic Novel', 'Contemporary', 'Thriller', 'Health', 'Cooking', 'Memoir', 'History', 'Bussiness'];

const NewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  return (
    <section className="section">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (title && category) {
          dispatch(createBook({ item_id: uniqid(), title, category }));
          setTitle('');
          setCategory(categories[0]);
          e.target.reset();
        }
      }}
      >
        <input type="text" placeholder="Book title" onChange={(title) => setTitle(title.target.value)} required />
        <select name="category" onChange={(category) => setCategory(category.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <Button name="ADD BOOK" btnType="submit" />
      </form>
    </section>
  );
};

export default NewBook;
