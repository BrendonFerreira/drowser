import React from 'react'
import {connect} from 'react-redux'
import SearchResultsList from '../components/SearchResultsList'

const mapStateToProps = (state) => {
    return {
        searchResultsList : state.search.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const SearchResults = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResultsList)

export default SearchResults