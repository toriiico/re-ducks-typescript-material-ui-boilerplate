import { AppState } from "./app/models"
import { TodosState } from "./todos/models"

// NOTE: if add 'other' ducks, add 'otherState' properties.
export interface StateAll {
  appState: AppState
  todosState: TodosState
}
