<<<<<<< HEAD
import React, { Component } from "react";

import { Container, Col, Image, Row } from "react-bootstrap";
import { SendOutlined } from "@ant-design/icons";
import StarRatingComponent from "react-star-rating-component";

import "./comment-box.styles.scss";
=======
import React, { Component } from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import { SendOutlined } from '@ant-design/icons';
import StarRatingComponent from 'react-star-rating-component';

import './comment-box.styles.scss';
>>>>>>> master

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
<<<<<<< HEAD
      comment: "",
    };
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  enterComment = (e, rat, com) => {
    this.props.onComment(e, rat, com)
    this.setState({
      rating: 0,
      comment: ""
    })
=======
      comment: '',
    };
  }

  onStarClick = (nextValue) => {
    this.setState({ rating: nextValue });
  };

  enterComment = () => {
    console.log(this.state);
    this.setState({
      rating: 0,
      comment: '',
    });
>>>>>>> master
  };

  handleChange = (e) => this.setState({ comment: e.target.value });

  render() {
    return (
<<<<<<< HEAD
      <Container className="comment-box">
        <Row className="mt-4">
          <Col>
            <StarRatingComponent
              className="rating"
              starCount={10}
              value={this.state.rating}
              emptyStarColor="#ccc"
=======
      <Container className='comment-box'>
        <Row className='mt-4'>
          <Col>
            <StarRatingComponent
              className='rating'
              starCount={10}
              value={this.state.rating}
              emptyStarColor='#ccc'
>>>>>>> master
              onStarClick={this.onStarClick}
            />
          </Col>
        </Row>
        <Row>
          <Col>
<<<<<<< HEAD
            <div className="input-group mb-3">
              <div class="input-group-append send-button">
                <button
                  class="btn btn-link"
                  type="button"
                  onClick={(e) => this.enterComment(e, this.state.rating, this.state.comment)}
=======
            <div className='input-group mb-3'>
              <textarea
                type='text'
                className='form-control'
                placeholder='Comment'
                value={this.state.comment}
                onChange={this.handleChange}
              />
              <div class='input-group-append send-button'>
                <button
                  class='btn btn-link'
                  type='button'
                  onClick={this.enterComment}
>>>>>>> master
                >
                  <SendOutlined />
                </button>
              </div>
<<<<<<< HEAD
              <input
                type="text"
                className="form-control"
                placeholder="Comment"
                value={this.state.comment}
                onChange={this.handleChange}
              />
=======
>>>>>>> master
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CommentBox;
