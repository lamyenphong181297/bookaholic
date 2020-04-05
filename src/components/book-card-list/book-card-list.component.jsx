import React from 'react';
import BookCard from '../book-card/book-card.component';
import './book-card-list.styles.scss';

const BookCardList = props => {
  return (
    <div className='book-card-list'>
      {props.books.map(book => (
        <BookCard key={book.book_id} book={book} />
      ))}
    </div>
  );
};

export default BookCardList;
