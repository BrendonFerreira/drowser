import React, { Component } from 'react';

class SearchResultItem extends Component {

    constructor(){
        super()
    }
    render() {
        let {title,content, url} = this.props.item;
        return (
            <li>
                <a href={url}>
                    {title}
                    {content}
                </a>
            </li>
        )
    }
}

export default SearchResultItem;
