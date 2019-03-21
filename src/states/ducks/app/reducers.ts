import { combineReducers, Reducer } from "redux"
import { getType } from "typesafe-actions"

import actions from "./actions"
import { AppAction, AppInfo, AppState, initAppInfo } from "./models"

const appInfo: Reducer<AppInfo, AppAction> = (state: AppInfo = initAppInfo, action: AppAction) => {
  switch (action.type) {
    case getType(actions.initialize):
      return {
        ...initAppInfo,
      }
    case getType(actions.setPageName):
      return {
        ...state,
        pageName: action.payload,
      }
    default:
      return state
  }
}

const appReducer = combineReducers<AppState, AppAction>({
  appInfo,
})

export default appReducer
