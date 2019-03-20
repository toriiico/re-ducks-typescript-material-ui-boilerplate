import { connect } from "react-redux"
import { Dispatch } from "redux"

import { appOperations } from "../../states/ducks/app"
import { StateAll } from "../../states/ducks/types"
import component from "./component"

const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  dispatch(appOperations.setPageName("Home"))

  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component as any)
