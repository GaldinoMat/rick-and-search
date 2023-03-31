import { createDriver } from "@redux-requests/axios";
import { handleRequests } from "@redux-requests/core";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import characters from "./modules/data/reducer";
import { api } from "@/pages/api/api";

export const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(api),
});

const reducer = combineReducers({ characters, requests: requestsReducer });

const store = createStore(reducer, applyMiddleware(...requestsMiddleware));

export default store;
