import React, { Component } from 'react'
import Search from '../../containers/Search'
import SearchResults from '../../containers/SearchResults'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-drag-area">
          <div className="indicator"></div>
        </div>
        <div className="App-header">
          <Search />
        </div>
        <SearchResults />
      </div>
    );
  }
}

export default App;
