import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem'

class SearchResultsList extends Component {

    render() {

        let {searchResultsList} = this.props

        const renderItem = (item, index) => <SearchResultItem item={item} key={index} />
    
        return (
            <ul>
                { searchResultsList.map(renderItem) }
            </ul>
            
        );
    }
}

export default SearchResultsList;
