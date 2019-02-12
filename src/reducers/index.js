import {combineReducers} from "redux";
import ImagesReducer from "./ImagesReducer";
import PostReducer from "./PostReducer";

const rootReducer = combineReducers({
  ImagesReducer,
  PostReducer,
});

export default rootReducer;
