import { connect } from "react-redux"
import { Dispatch } from "redux"

import { appSelectors } from "../states/ducks/app"
import { StateAll } from "../states/ducks/types"
import component from "./component"

const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {
    title: appSelectors.getTitle(state.appState),
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
