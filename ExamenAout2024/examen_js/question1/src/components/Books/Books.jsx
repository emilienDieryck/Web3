import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from 'contexts/BookContext';

const Books = () => {
  const { books, fetchBooks, updateBookState } = useContext(BookContext);
  const [selectedState, setSelectedState] = useState({});

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleStateChange = (id, newState) => {
    setSelectedState((prevState) => ({
      ...prevState,
      [id]: newState,
    }));
  };

  const handleUpdateClick = (id) => {
    const newState = selectedState[id];
    if (newState) {
      updateBookState(id, newState);
    }
  };

  return (
    <div>
      <h1>Gestion de livres</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <select
              value={selectedState[book.id] || book.state}
              onChange={(e) => handleStateChange(book.id, e.target.value)}
            >
              <option value="read">lu</option>
              <option value="to_read">à lire</option>
              <option value="reading">en cours de lecture</option>
            </select>
            <button onClick={() => handleUpdateClick(book.id)}>Mettre à jour l’état</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;