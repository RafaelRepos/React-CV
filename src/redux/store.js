import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import showEducationReducer from "./buttons/buttons.reducer";
const rootReducer = combineReducers({ showEducation: showEducationReducer });
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
