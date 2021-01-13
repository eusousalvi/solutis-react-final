import { EXAMPLE_CONST } from '../../constants/exampleConstants';

const INITIAL_STATE = {
  example: 'example',
};

export default function reducer(state = INITIAL_STATE, action = null) {
  switch (action.type) {
    case EXAMPLE_CONST:
      return { ...state, carsList: [...state.carsList, action.payload] };
    default:
      return state;
  }
}
