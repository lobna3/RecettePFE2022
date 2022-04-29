import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/root.reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
