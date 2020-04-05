import React from 'react';
import './book-card.styles.scss';

const BookCard = ({
  book: { title, authors, image_url, original_publication_year },
}) => (
  <div className='card-container'>
    <div className='cover-container'>
      <img alt={title} src={image_url} />
    </div>
    <div className='details'>
      <h2>{title}</h2>
      <h3>{authors}</h3>
      <p>{original_publication_year}</p>
    </div>
  </div>
);

export default BookCard;
