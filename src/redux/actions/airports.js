import { 
    UPDATE_AIRPORTS,
    SORT_AIRPORTS,
    SELECT_FOR_REMOVAL,
    REMOVE_FROM_REMOVAL_LIST,
    REFRESH_PAGE,
    UPDATE_QUERY,
    UPDATE_SEARCH_FILTER,
    UPDATE_LOADING
} from "../constants/airports" 

export const selectForRemoval = (id) => {
    return {
        type: SELECT_FOR_REMOVAL,
        payload: id
    }
}

export const removeFromRemovalList = (id) => {
    return {
        type: REMOVE_FROM_REMOVAL_LIST,
        payload: id
    }
}

export const refreshPage = () => {
    return {
        type: REFRESH_PAGE
    }
}

export const updateAirports = (airports) => {
    return {
        type: UPDATE_AIRPORTS,
        payload: airports
    }
}

export const updateQuery = (query) => {
    return {
        type: UPDATE_QUERY,
        payload: query
    }
}

export const updateSearchFilter = (filter) => {
    return {
        type: UPDATE_SEARCH_FILTER,
        payload: filter
    }
}

export const sortAirports = (field) => {
    return {
        type: SORT_AIRPORTS,
        payload: field
    }
}

export const updateLoading = (value) => {
    return {
        type: UPDATE_LOADING,
        payload: value
    }
}