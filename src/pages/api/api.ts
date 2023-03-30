import axios from "axios";
import { AnyAction, Dispatch } from "redux";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

type getActionType = {
  type: string;
  request: { url: string; method: string };
  data: never[];
};

export const apiGet = async (
  dispatchFunc: (func: any) => Dispatch<AnyAction>,
  getAction: getActionType,
  displayAction: (data: any) => void
) => {
  const { data }: any = await dispatchFunc(getAction);

  dispatchFunc(displayAction(data));
};
