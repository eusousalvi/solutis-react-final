import { 
    SELECT_FOR_REMOVAL,
    REMOVE_FROM_REMOVAL_LIST,
    REFRESH_PAGE,
    UPDATE_QUERY,
    UPDATE_SEARCH_FILTER
} from "../../constants/airports"

const INITIAL_STATE = {
    selectedForRemoval: [],
    refresh: false,
    query: "",
    searchFilter: "code"
}

export default function reducer(state = INITIAL_STATE, action = null) {
    switch(action.type) {
        case SELECT_FOR_REMOVAL:
            return (
                {...state, 
                    selectedForRemoval: [
                        ...state.selectedForRemoval, 
                        action.payload
                    ]
                }
            )
        case REMOVE_FROM_REMOVAL_LIST:
            return (
                {...state,
                    selectedForRemoval: 
                    action.payload === "all" ? 
                    []
                    :
                    state.selectedForRemoval.filter(id => id !== action.payload)
                }
            )
        case REFRESH_PAGE:
            return (
                {...state,
                    refresh: action.payload
                }
            )
        case UPDATE_QUERY:
            return (
                {...state,
                    query: action.payload
                }
            )
        case UPDATE_SEARCH_FILTER:
            return (
                {...state,
                    searchFilter: action.payload
                }
            )
        default:
            return state;
    }
}
