import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {tableReducer} from "../slices/table.slice";


const rootReducer = combineReducers({
  tableReducer,
});

const setupStore = () => configureStore({
  reducer: rootReducer,
});


export {setupStore};
