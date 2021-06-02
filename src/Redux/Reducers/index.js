import {combineReducers} from "redux";
import * as userReducers from "./userReducer";

const appReducer = combineReducers({userReducers});

let rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;