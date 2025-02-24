// src/components/BookCard.jsx
import React from 'react';

function BookCard({ book }) {
  return (
    <div className="card">
      <img src={book.image} alt={book.name} />
      <h2>{book.name}</h2>
      <p>Genre: {book.genre}</p>
      <p>Author: {book.author}</p>
    </div>
  );
}

export default BookCard;