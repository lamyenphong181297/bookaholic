import React from 'react';

import ReviewModal from '../review-modal/review-modal.component';

import './book-card-list.styles.scss';

const BookCardList = (props) => {
  return (
    <div className='book-card-list'>
      {props.books.map((book) => (
        <ReviewModal key={book.book_id} book={book} />
      ))}
    </div>
  );
};

export default BookCardList;
