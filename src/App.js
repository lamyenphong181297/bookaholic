import React, { Component } from 'react';

import BookCardList from './components/book-card-list/book-card-list.component';

import BOOKS_DATA from './data/books.data';

import Logo from './assets/bookaholic.png';

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
    return (
      <div className='App'>
        <div align='center'>
          <img alt='logo' src={Logo} width='200px' />
        </div>
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
