import { connect } from "react-redux"
import { Dispatch } from "redux"

import { todosOperations, todosSelectors } from "../../../states/ducks/todos"
import { StateAll } from "../../../states/ducks/types"
import component from "../../components/todos/FilterList"

const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {
    visibilityFilter: todosSelectors.getVisibilityFilter(state.todosState),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    onFilterClick: (filter: string) => {
      dispatch(todosOperations.setVisibilityFilter(filter))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component as any)
