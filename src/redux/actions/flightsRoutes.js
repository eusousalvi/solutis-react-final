import { SELECT_ITEM, DESELECT_ITEM } from "../constants/flightsRoutes";

export const selectItem = (id) => {
    return {
        type: SELECT_ITEM,
        payload: id
    }
}

export const deselectItem = (id) => {
    return {
        type: DESELECT_ITEM,
        payload: id
    }
}