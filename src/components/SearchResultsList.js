import React, { Component } from 'react';
import SearchResultItem from './SearchResultItem'

class SearchResultsList extends Component {

    render() {

        let {searchResultsList} = this.props

        const renderItem = (item, index) => <SearchResultItem item={item} key={index} />;
    
        const style = {
            listStyle: 'none',
            padding: 0,
            width: "90%",
            margin: "0 auto"
        }

        return (
            <ul style={style}>
                { searchResultsList.map(renderItem) }
            </ul>
            
        );
    }
}

export default SearchResultsList;
