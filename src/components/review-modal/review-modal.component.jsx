import React, { Component } from "react";
import { Container, Col, Button, Modal, Image, Row } from "react-bootstrap";

import "./review-modal.styles.scss";

class ReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.book) {
      return (
        <>
          <Button variant="primary" onClick={this.props.changeShowState}>
            Launch demo modal
          </Button>

          <Modal
            size={"lg"}
            show={this.props.show}
            onHide={this.props.changeShowState}
          >
            <Modal.Body>
              <Container>
                <Row>
                  <Col md={6}>
                    <Image src={this.props.book.image_url} fluid />
                  </Col>
                  <Col md={6}>
                    <h2 className="book-name mb-2">
                      {this.props.book.original_title}
                    </h2>
                    <Row>
                      <Col md={4}>
                        <p className="book-info__label">{"Author: "}</p>
                      </Col>
                      <Col md={8}>
                        <p className="book-info">{this.props.book.authors}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <p className="book-info__label">Public year: </p>
                      </Col>
                      <Col md={8}>
                        <p className="book-info">
                          {this.props.book.original_publication_year}
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <p className="book-info__label">Full Title: </p>
                      </Col>
                      <Col md={8}>
                        <p className="book-info">{this.props.book.title}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        </>
      );
    } else {
      return (
        <div></div>
      );
    }
  } 
}

export default ReviewModal;
