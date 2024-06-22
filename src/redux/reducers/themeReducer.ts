import type { ISetThemeAction } from "../actions/themeActions";
import { SET_THEME } from "../actions/themeActions";
import { Reducer } from "redux";

export type Theme = "light" | "dark";

export interface IThemeState {
  theme: Theme;
}

const initialState: IThemeState = {
  theme: "light",
};

export const themeReducer: Reducer<IThemeState, ISetThemeAction> = (
  state: IThemeState = initialState,
  action: ISetThemeAction
) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
