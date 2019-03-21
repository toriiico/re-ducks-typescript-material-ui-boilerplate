import { createStandardAction } from "typesafe-actions"

import { AddTodoAction } from "./models"

export const addTodo = createStandardAction("ADD_TODO")<AddTodoAction>()

export const setVisibilityFilter = createStandardAction("SET_VISIBILITY_FILTER")<string>()

export const toggleTodo = createStandardAction("TOGGLE_TODO")<string>()

export default {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
}
