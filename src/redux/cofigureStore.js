import { createStore } from 'redux';

const initialState = {
  books: [
    {
      id: 0,
      categorie: 'Metaphysics',
      title: 'Conversations with Nostradamus: His Prophecies Explained',
      author: 'Dolores Canon',
    },
    {
      id: 1,
      categorie: 'Autobiography',
      title: 'The Diary of A Young Girl',
      author: 'Anne Frank',
    },
    {
      id: 2,
      categorie: 'Children Books',
      title: 'Prom Nights from Hell',
      author: 'Meg Cabot, Stephenie Meyer, Kim Harrison, Michele Jaffe, Lauren Myracle',
    },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(rootReducer);
window.store = store;

export default store;
