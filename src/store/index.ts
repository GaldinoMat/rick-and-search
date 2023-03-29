import { ApiLoad } from "./modules/data/types";
import { createDriver } from "@redux-requests/axios";
import { handleRequests } from "@redux-requests/core";
import axios from "axios";
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import characters from "./modules/data/reducer";

export type IStateType = {
  characters: ApiLoad;
};

export const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: createDriver(
    axios.create({
      baseURL: "https://rickandmortyapi.com/api/character",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
  ),
});

const reducer = combineReducers({ characters, requests: requestsReducer });

const store = createStore(reducer, applyMiddleware(...requestsMiddleware));

export default store;
