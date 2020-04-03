import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchField: ''
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className='App'>
        <h1>BOOKAHOLIC</h1>
      </div>
    );
  }
}

export default App;
