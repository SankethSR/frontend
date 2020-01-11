import { createStore } from "redux";
import searchReducer from "./reducers/searchReducer";

const configureStore = () => {
    return createStore(searchReducer);
}

export default configureStore;
