import { connect } from "react-redux"
import { Dispatch } from "redux"

import { todosOperations } from "../../../states/ducks/todos"
import { StateAll } from "../../../states/ducks/types"
import component from "../../components/AddTodo"

const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    addTodo: (text: string) => {
      dispatch(todosOperations.addTodo(text))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component as any)
