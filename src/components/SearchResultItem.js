import React, { Component } from 'react';

class SearchResultItem extends Component {

    constructor(){
        super()
    }
    render() {
        let {title,content, url} = this.props.item;
        
        const style = {
            backgroundColor: '#90949D',
            borderRadius: "3px",
            margin: '2px',
            padding: '5px 10px'
        } 
        
        return (
            <li style={style}>
                <a href={url}>
                    {title}
                    {content}
                </a>
            </li>
        )
    }
}

export default SearchResultItem;
