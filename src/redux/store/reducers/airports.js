import { 
    SELECT_AIRPORT,
    DESELECT_AIRPORT,
    REFRESH_PAGE,
    UPDATE_QUERY,
    UPDATE_SEARCH_FILTER,
    SORT_AIRPORTS,
    UPDATE_AIRPORTS,
    UPDATE_LOADING
} from "../../constants/airports"

const INITIAL_STATE = {
    airports: [],
    selectedForRemoval: [],
    refresh: false,
    query: "",
    searchFilter: "code",
    sortBy: "", 
    order: true,
    loading: 0
}

export default function reducer(state = INITIAL_STATE, action = null) {
    switch(action.type) {
        case SELECT_AIRPORT:
            return (
                {...state, 
                    selectedForRemoval: [
                        ...state.selectedForRemoval, 
                        action.payload
                    ]
                }
            )
        case DESELECT_AIRPORT:
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
                    refresh: !state.refresh
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
        case UPDATE_AIRPORTS:
            return (
                {...state,
                    airports: action.payload
                }
            )
        case SORT_AIRPORTS:
            return (
                {...state,
                    sortBy: action.payload,
                    order: !state.order
                }
            )
        case UPDATE_LOADING:
            return (
                {...state,
                    loading: action.payload === 0 ? 0 : state.loading + action.payload
                }
            )
        default:
            return state;
    }
}
