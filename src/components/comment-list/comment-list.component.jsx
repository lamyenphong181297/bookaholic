import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Comment from '../comment/comment.component';
import CommentBox from "../comment-box/comment-box.component";

import './comment-list.styles.scss';

import COMMENT_DATA from '../../data/comment.data';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commentList: [],
    };

    this.onComment = this.onComment.bind(this);
  }

  componentDidMount() {
    this.setState({ commentList: COMMENT_DATA });
    console.log(this.state.commentList);
  }

  onComment(e, rat, com) {
    e.preventDefault();
    if(rat != 0) {
      this.setState({
        commentList: [...this.state.commentList, {book_id: this.props.bookId, rating: rat, comment: com}]
      });
      this.setState({
          comment: "",
          rating: 0
      });
    }
  }

  render() {
    return this.state.commentList ? (
      <>
        <div className="mb-2">
          {this.state.commentList.map((comment) => (
            <Comment comment={comment}>
            </Comment>
          ))}
        </div>
        <CommentBox onComment={this.onComment}/>
      </>
    ) : null;
  }
}

export default CommentList;
