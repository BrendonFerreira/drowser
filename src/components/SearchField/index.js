import React, { Component } from 'react';
import Close from './close.svg';
import './SearchField.css'
const {remote} = window.require('electron')

class SearchField extends Component {

    constructor(){
        super()
        this.onSearchButtonClick = this.onSearchButtonClick.bind(this)
        this.onCloseButtonClick = this.onCloseButtonClick.bind(this)
    }

    onCloseButtonClick() {
        if( remote.BrowserWindow.getFocusedWindow() ) {
            remote.BrowserWindow.getFocusedWindow().close()
        }
    }

    onSearchButtonClick() {
        this.props.doSearch( this.refs.searchInput.value )
    }

    onKeyPressedInsideInput(e) {
        if( e.key === 'Enter' ){
            this.props.doSearch( this.refs.searchInput.value )
        }
    }

    render() {
        const button = <button onClick={this.onSearchButtonClick}>Search</button> 
            
        return (
            <div className="search-field-root">
                <input type="text" ref="searchInput" onKeyPress={this.onKeyPressedInsideInput.bind(this)} />
                <div className="close-button" onClick={this.onCloseButtonClick}>
                    <img src={Close} />
                </div>
            </div>
        );
    }
}

export default SearchField;
