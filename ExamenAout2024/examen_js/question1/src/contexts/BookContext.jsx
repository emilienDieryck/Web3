import React, { createContext, useState, useEffect } from 'react';
import booksService from 'services/books';

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await booksService.getAll();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const updateBookState = async (id, newState) => {
    try {
      const updatedBook = await booksService.patchOne(id, { state: newState });
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === id ? { ...book, state: updatedBook.state } : book
        )
      );
    } catch (error) {
      console.error('Error updating book state:', error);
    }
  };

  return (
    <BookContext.Provider value={{ books, fetchBooks, updateBookState }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };