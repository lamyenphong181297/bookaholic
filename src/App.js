import React, { Component } from 'react';

import BookCardList from './components/book-card-list/book-card-list.component';

import BOOKS_DATA from './data/books.data';

import './App.css';

import ReviewModal from './components/review-modal/review-modal.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchField: '',
      show: false,
    };
  }

  componentDidMount() {
    this.setState({ books: BOOKS_DATA.slice(0, 10) });
  }

  changeShowState = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    console.log(this.state.books[0]);
    return (
      <div className='App'>
        <h1 align='center'>BOOKAHOLIC</h1>
        <ReviewModal
          changeShowState={this.changeShowState}
          book={this.state.books[0]}
          show={this.state.show}
        />
        <BookCardList books={this.state.books} />
      </div>
    );
  }
}

export default App;
