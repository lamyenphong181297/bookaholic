import React, { Component } from 'react';

import BookCardList from './components/book-card-list/book-card-list.component';
import SearchBox from './components/search-box/search-box.component';

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

  handleChange = (e) => this.setState({ searchField: e.target.value });

  changeShowState = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { books, searchField } = this.state;
    const filteredBooks = books.filter((book) =>
      book.original_title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1 align='center'>BOOKAHOLIC</h1>
        <div align='center'>
          <SearchBox placeholder='Search' handleChange={this.handleChange} />
        </div>
        <ReviewModal
          changeShowState={this.changeShowState}
          book={this.state.books[0]}
          show={this.state.show}
        />
        <BookCardList books={filteredBooks} />
      </div>
    );
  }
}

export default App;

