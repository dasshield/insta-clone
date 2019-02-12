import {FETCH_IMAGES, FETCH_IMAGES_SUCCESS} from "../actions/Actions";

const initialState = {
  isFetching: null,
  images: [],
  hasError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      return Object.assign({}, {
        ...state,
        isFetching: true,
      });
    case FETCH_IMAGES_SUCCESS:
      return Object.assign({}, {
        ...state,
        isFetching: false,
        hasError: false,
        images: action.payload,
      });
    default:
      return state;
  }
}
