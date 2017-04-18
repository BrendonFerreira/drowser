import {ADD_SEARCH_RESULT, FETCH_SEARCH_FAIL, FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS} from '../actions/search'

const defaultSearch = {
    isFetching: false,
    isFailed: false,
    isFetched: false,
    error: '',
    searchValue: '',
    isInputSearchActive: false,
    results: []
}

const search = (state = defaultSearch, action) => {
    if( !action ){
        return state
    } 
    switch (action.type) {
        case FETCH_SEARCH_REQUEST:{
            return {
                ...state,
                isFetching: true,
                isFetched: false,
            }
            break;
        }
        case FETCH_SEARCH_FAIL:{
            return {
                ...state,
                isFetching: false,
                isFetched: false,
                isFailed: true,
                error: action.payload,
            }
            break;
        }
        case FETCH_SEARCH_SUCCESS:{
            return {
                ...state,
                isFetching: false,
                isFetched: true,
                results: action.payload,
            }
        }
        case ADD_SEARCH_RESULT : {
            return {
                ...state,
                results: [
                    ...state.results,
                    action.payload
                ],
            }
        }
    }
    return state
}

export default search;