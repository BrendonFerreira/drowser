import React from 'react'
import {connect} from 'react-redux'
import {searchRequest, searchRequestFail, searchRequestSuccess, addSearchResult} from '../actions/search'
import SearchField from '../components/SearchField'
import duckDuckGoRequestParser from '../parsers/duckDuckGoResponseParser'
import { Requester } from 'node-duckduckgo'


const mapStateToProps = ({search}) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doSearch : ( searchInput ) => {
            dispatch(searchRequest())

            const requester = new Requester("drowser");
            requester.no_html = 0;
            requester.no_redirect = 1;
            requester.request(searchInput)
                .on('data', function (data) {
                    this.emit('responseJson', JSON.parse( data.toString() ))
                })
                .on('responseJson', (data) => {
                    let {list, definition} = duckDuckGoRequestParser(data)
                    dispatch(searchRequestSuccess(list))
                    dispatch(addSearchResult(definition))
                })
                .on('error', (err) => {
                    dispatch(searchRequestFail(err)) 
                }) 

        }
    }
}

const Search = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchField)

export default Search