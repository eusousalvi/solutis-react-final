import { 
    UPDATE_AIRPORTS,
    SELECT_FOR_REMOVAL,
    REMOVE_FROM_REMOVAL_LIST,
    REFRESH_PAGE,
    UPDATE_QUERY,
    UPDATE_SEARCH_FILTER
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

export const refreshPage = (shouldRefresh) => {
    return {
        type: REFRESH_PAGE,
        payload: shouldRefresh
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