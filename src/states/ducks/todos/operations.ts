import { Dispatch } from "redux"

import actions from "./actions"

let nextTodoId = 0

const addTodo = (text: string) => (dispatch: Dispatch) => {
  nextTodoId += 1
  return dispatch(actions.addTodo({ id: nextTodoId, text }))
}

const setVisibilityFilter = (filter: string) => actions.setVisibilityFilter(filter)

const toggleTodo = (id: string) => actions.toggleTodo(id)

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
