import React from 'react';

import { Card, Button, Col } from 'react-bootstrap';

import { SendOutlined } from "@ant-design/icons";
import StarRatingComponent from "react-star-rating-component";

import './comment.styles.scss';

const Comment = ({
  comment: { book_id, rating, comment}
}) => (
  <div className="border rounded p-2 mb-2">
    <StarRatingComponent
      className="rating"
      starCount={10}
      value={rating}
      emptyStarColor="#ccc"
    />
    <div className="mt-n3">
      {comment}
    </div>
  </div>
);

export default Comment;
