import { Dispatch } from "redux"

import actions from "./actions"

const setPageName = (pageName: string) => (dispatch: Dispatch<any>) => {
  return dispatch(actions.setPageName(pageName))
}

export default {
  setPageName,
}
