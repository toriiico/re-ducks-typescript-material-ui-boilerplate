import { connect } from "react-redux"
import { Dispatch } from "redux"

import { todosOperations, todosSelectors } from "../../../states/ducks/todos"
import { StateAll } from "../../../states/ducks/types"
import component from "../../components/todos/TodoList"

const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {
    todos: todosSelectors.getVisibleTodos(state.todosState),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    onTodoClick: (id: string) => {
      dispatch(todosOperations.toggleTodo(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
