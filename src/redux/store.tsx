import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import searchReducer from "./reducers/searchReducer";


const middleware= applyMiddleware(thunk);

const configureStore= createStore(searchReducer, middleware);


export default configureStore;