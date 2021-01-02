import { createStore, compose } from "redux";
import rootReducer from "../reducers/index";
import { saveToLocalStorage } from "../utils/utils";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer()
);

store.subscribe(() => saveToLocalStorage(store.getState().widgets.widgets));

export default store;
