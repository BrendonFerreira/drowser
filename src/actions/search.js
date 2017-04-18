export const FETCH_SEARCH_REQUEST = 'FETCH_SEARCH_REQUEST'
export const FETCH_SEARCH_FAIL = 'FETCH_SEARCH_FAIL'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'

function searchRequest() {
    return { type : FETCH_SEARCH_REQUEST } 
}
function searchRequestFail(reason) {
  	return { type : FETCH_SEARCH_FAIL, payload: reason }
}
function searchRequestSuccess(data) {
  	return { type : FETCH_SEARCH_SUCCESS, payload: data }
}
function addSearchResult(result) {
    return { type: ADD_SEARCH_RESULT, payload: result }
}
export { 
	searchRequest,
	searchRequestFail,
	searchRequestSuccess,
    addSearchResult
}