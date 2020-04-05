import React from 'react';
import LazyLoad from 'react-lazyload';

import ReviewModal from '../review-modal/review-modal.component';

import './book-card-list.styles.scss';

const BookCardList = (props) => {
  return (
    <div className='book-card-list'>
      {props.books.map((book) => (
        <LazyLoad once>
          <ReviewModal key={book.book_id} book={book} />
        </LazyLoad>
      ))}
    </div>
  );
};

export default BookCardList;
