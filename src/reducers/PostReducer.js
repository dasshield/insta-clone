import {FETCH_POST, FETCH_POST_FAIL, FETCH_POST_SUCCESS} from "../actions/Actions";

const initialState = {
  isFetching: true,
  post: null,
  hasError: false,
  currentPost: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POST:
      return Object.assign({}, {
        ...state,
        isFetching: true
      });
    case FETCH_POST_SUCCESS:
      return Object.assign({}, {
        ...state,
        isFetching: false,
        post: action.payload,
      });
    case FETCH_POST_FAIL:
      return Object.assign({}, {
        ...state,
        isFetching: false,
        hasError: true,
      });
    default:
      return state;
  }
}
