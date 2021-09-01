/* eslint-disable quotes */

import React from "react";
import Books from "./Books";
import AddBook from "./AddBook";

const books = [
  {
    id: 1,
    category: "Metaphysics",
    title: "Conversations with Nostradamus: His Prophecies Explained",
    author: "Dolores Cannon",
    progress: {
      currentChapter: "Chapter 2",
      completed: "1",
    },
  },
  {
    id: 2,
    category: "Autobiography",
    title: "The Diary of A Young Girl",
    author: "Anne Frank",
    progress: {
      currentChapter: '3',
      completed: "3",
    },
  },
  {
    id: 3,
    category: "Children's Books, 2009 - Children's stories",
    title: "Prom Nights from Hell",
    author: "Meg Cabot, Stephenie Meyer, Kim Harrison, Michele Jaffe, Lauren Myracle",
    progress: {
      currentChapter: "5",
      completed: "5",
    },
  },
];

const BookInfo = () => (
  <div>
    <Books books={books} />
    <AddBook />
  </div>
);

export default BookInfo;
