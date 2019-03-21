export interface Todo {
  id: number
  text: string
  completed: boolean
}

export interface TodosState {
  todos: Todo[]
  visibilityFilter: string
}

export interface AddTodoAction {
  id: number
  text: string
}
