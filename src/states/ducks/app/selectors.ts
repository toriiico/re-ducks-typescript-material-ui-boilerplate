import { createSelector, Selector } from "reselect"

import { AppInfo, AppState } from "./models"

const appInfoSelector: Selector<AppState, AppInfo> = (state: AppState): AppInfo => state.appInfo

const getTitle = createSelector(
  appInfoSelector,
  (state: AppInfo, addPageName: boolean = true) => {
    return addPageName ? state.title : `${state.pageName} | ${state.title}`
  }
)

export default {
  getTitle,
}
