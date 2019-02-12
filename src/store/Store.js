import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";

let middleware = [thunk, promise];

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, logger];
}
// const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);

export default Store;
