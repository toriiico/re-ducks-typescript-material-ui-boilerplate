import { createStandardAction } from "typesafe-actions"

const initialize = createStandardAction("app/INISIALIZE")<void>()

const setPageName = createStandardAction("app/SET_PAGE_NAME")<string>()

export default {
  initialize,
  setPageName,
}
