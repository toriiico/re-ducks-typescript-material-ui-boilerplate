import { ActionType } from "typesafe-actions"

import actions from "./actions"
import CONST from "./constants"

export interface AppInfo {
  title: string
  pageName: string
}

export interface AppState {
  appInfo: AppInfo
}

export interface GetTitleAction {
  payload: string
}

export interface SetPageNameAction {
  payload: string
}

export type AppAction = ActionType<typeof actions>

// init state values.
export const initAppInfo: AppInfo = {
  title: CONST.TITLE,
  pageName: CONST.PAGE_NAME,
}
