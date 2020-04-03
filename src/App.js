import React, { Component } from 'react';

import BOOKS_DATA from './data/books.data';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchField: ''
    };
  }

  componentDidMount() {
    this.setState({ books: BOOKS_DATA.slice(0, 10) });
  }

  render() {
    return (
      <div className='App'>
        <h1>BOOKAHOLIC</h1>
      </div>
    );
  }
}

export default App;
