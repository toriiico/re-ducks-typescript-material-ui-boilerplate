import { connect } from "react-redux"
import { Dispatch } from "redux"

import { appOperations } from "../../states/ducks/app"
import { StateAll } from "../../states/ducks/types"
import component from "./component"

const mapStateToProps = (state: StateAll, ownProps: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    setPageName: (pageName: string) => {
      return dispatch(appOperations.setPageName(pageName))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(component)
