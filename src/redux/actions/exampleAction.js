import { EXAMPLE_CONST } from '../constants/exampleConstants';

export const add = (example) => (dispatch) => {
  return dispatch({
    type: EXAMPLE_CONST,
    payload: example,
  });
};
