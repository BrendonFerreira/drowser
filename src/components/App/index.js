import React, { Component } from 'react'
import Search from '../../containers/Search'
import SearchResults from '../../containers/SearchResults'
import './App.css'
const {remote} = window.require('electron')

class App extends Component {

  constructor() {
    super()
    this.onCloseButtonClick = this.onCloseButtonClick.bind(this)
  }

  onCloseButtonClick() {
    if( remote.BrowserWindow.getFocusedWindow() ) {
      remote.BrowserWindow.getFocusedWindow().close()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Search />
        </div>
        <SearchResults />
      </div>
    );
  }
}

export default App;
