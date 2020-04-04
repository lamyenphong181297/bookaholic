import React, { Component } from 'react';

import BOOKS_DATA from './data/books.data';

import './App.css';

import ReviewModal from './components/review-modal/review-modal.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchField: '',
      show: false
    };
    this.changeShowState = this.changeShowState.bind(this);
  }

  componentDidMount() {
    this.setState({ books: BOOKS_DATA.slice(0, 10)});
  }

  changeShowState() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    console.log(this.state.books[0]);
    return (
      <div className='App'>
        <h1>BOOKAHOLIC</h1>
        <ReviewModal changeShowState={this.changeShowState} book={this.state.books[0]} show={this.state.show}/>
      </div>
    );
  }
}

export default App;
