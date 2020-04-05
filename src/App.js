import React, { Component } from 'react';

import BookCardList from './components/book-card-list/book-card-list.component';
import SearchBox from './components/search-box/search-box.component';

import BOOKS_DATA from './data/books.data';

import Logo from './assets/bookaholic.png';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchField: '',
    };
  }

  componentDidMount() {
    this.setState({ books: BOOKS_DATA.slice(0, 10) });
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { books, searchField } = this.state;
    const filteredBooks = books.filter((book) =>
      book.original_title.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <div>
          <img alt='logo' src={Logo} width='200px' />
        </div>
        <SearchBox placeholder='Search' handleChange={this.handleChange} />
        <BookCardList books={filteredBooks} />
      </div>
    );
  }
}

export default App;
