import { LIST_HOTELS } from "../constants/hotelsConstants";

export const getAllHotels = (hotels) => (dispatch) => {
  return dispatch({
    type: LIST_HOTELS,
    payload: hotels,
  });
};

export default { getAllHotels };
